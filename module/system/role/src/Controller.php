<?php

namespace Module\System\Role;

use App\Role;
use App\RoleAccess;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller as AppController;

class Controller extends AppController
{

    /**
     * GET请求入口页面
     *
     * @return \Illuminate\View\View
     */
    public function getIndex()
    {
        return view('index', ['action' => module_action(__FUNCTION__)]);
    }

    /**
     * POST请求入口页面
     *
     * @param Request $request
     * @param Role $role
     * @return \Illuminate\Http\JsonResponse
     */
    public function postIndex(Request $request, Role $role)
    {
        // 字段筛选
        $filterRules = collect(json_decode($request->input('filterRules', '[]'), true));
        $filterRules->each(function ($rule) use (&$role) {
            $field = array_get($rule, 'field');
            $value = array_get($rule, 'value');
            $op = array_get($rule, 'op');

            switch ($op) {
                case 'contains':
                    $value = str_replace('%', '\%', $value);
                    $role = $role->where($field, 'like', "%{$value}%");
                    break;
                case 'beginwith':
                    $value = str_replace('%', '\%', $value);
                    $role = $role->where($field, 'like', "{$value}%");
                    break;
                case 'endwith':
                    $value = str_replace('%', '\%', $value);
                    $role = $role->where($field, 'like', "%{$value}");
                    break;
                case 'equal':
                    $role = $role->where($field, $value);
                    break;
                case 'notequal':
                    $role = $role->where($field, '<>', $value);
                    break;
                case 'less':
                    $value = intval($value);
                    $role = $role->where($field, '<', $value);
                    break;
                case 'lessorequal':
                    $value = intval($value);
                    $role = $role->where($field, '<=', $value);
                    break;
                case 'greater':
                    $value = intval($value);
                    $role = $role->where($field, '>', $value);
                    break;
                case 'greaterorequal':
                    $value = intval($value);
                    $role = $role->where($field, '>=', $value);
                    break;
            }
        });

        // 支持多个字段排序
        $sorts = collect(explode(',', $request->input('sort', 'id')));
        $orders = collect(explode(',', $request->input('order', 'desc')));
        $orders->each(function ($order, $key) use (&$role, $sorts) {
            $role = $role->orderBy($sorts->get($key), $order);
        });

        // 分页
        $rows = $role->paginate($request->input('rows', 20));

        return $this->success([
            'total' => $rows->total(),
            'rows' => $rows->items(),
            'filterRules' => $filterRules,
        ]);
    }

    /**
     * GET请求新增页面
     *
     * @return \Illuminate\View\View
     */
    public function getCreate()
    {
        return view('create');
    }

    /**
     * 添加数据提交
     *
     * @param Request $request
     * @param Role $role
     * @return \Illuminate\Http\JsonResponse
     */
    public function postCreate(Request $request, Role $role)
    {
        $role->name = $request->input('name');
        $role->description = $request->input('description');

        return $role->save() ? $this->success('添加成功') : $this->error('添加失败');
    }

    /**
     * 编辑页面
     *
     * @param Request $request
     * @param Role $role
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getUpdate(Request $request, Role $role)
    {
        $row = $role->findOrFail($request->input('id', 0));

        return view('update', ['row' => $row]);
    }

    /**
     * 编辑数据提交
     *
     * @param Request $request
     * @param Role $role
     * @return \Illuminate\Http\JsonResponse
     */
    public function postUpdate(Request $request, Role $role)
    {
        $row = $role->findOrFail($request->input('id', 0));

        $row->name = $request->input('name');
        $row->description = $request->input('description');

        return $row->save() ? $this->success('修改成功') : $this->error('修改失败');
    }

    /**
     * 删除数据
     *
     * @param Request $request
     * @param Role $role
     * @return \Illuminate\Http\JsonResponse
     */
    public function postDelete(Request $request, Role $role)
    {
        $id = $request->input('id', 0);
        if ($id == 1) {
            return $this->error('系统默认角色，禁止删除');
        }

        return $role->destroy($id) ? $this->success('删除成功') : $this->error('删除失败');
    }

    /**
     * 权限设置
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getAccess()
    {
        return view('access', ['action' => module_action(__FUNCTION__)]);
    }

    /**
     * 获取权限列表数据
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postAccess(Request $request)
    {
        $data = collect(modules())
            ->filter(function ($module) {
                return array_get($module, 'composer.extra.module.module.access', true) !== false;
            })
            ->sortBy('composer.name')
            ->map(function ($module) {
                // 获取当前模块权限列表
                $children = collect(array_get($module, 'composer.extra.module.access', []))
                    ->filter(function ($status) {
                        return $status !== false;
                    })
                    ->map(function ($status, $access) use ($module) {
                        return [
                            'id' => bin2hex(random_bytes(8)),  // 随机字符
                            'iconCls' => array_get($module, "composer.extra.module.icon.{$access}", ''),
                            'name' => $access,
                            'group' => array_get($module, 'group'),
                            'module' => array_get($module, 'module'),
                            'access' => $access,
                        ];
                    })
                    ->values();

                // 返回模块信息
                return [
                    'id' => bin2hex(random_bytes(8)),  // 随机字符
                    'state' => 'closed',
                    'iconCls' => array_get($module, 'composer.extra.module.module.icon'),
                    'name' => array_get($module, 'composer.extra.module.module.title', array_get($module, 'module')),
                    'group' => array_get($module, 'group'),
                    'module' => array_get($module, 'module'),
                    'access' => '*',
                    'children' => $children,
                ];
            })
            ->groupBy('group')
            ->map(function ($module, $group) {
                return [
                    'id' => bin2hex(random_bytes(8)),  // 随机字符
                    'state' => 'closed',
                    'iconCls' => 'fa fa-folder-o',
                    'name' => trans("module.{$group}"),
                    'group' => $group,
                    'module' => '*',
                    'access' => '*',
                    'children' => $module,
                ];
            })
            ->values();

        return $this->success([
            'total' => $data->count(),
            'rows' => $data->toArray(),
        ]);
    }

    /**
     * 权限保存
     *
     * @param Request $request
     * @param Role $role
     * @return \Illuminate\Http\JsonResponse
     */
    public function postAccessSave(Request $request, Role $role)
    {
        $id = $request->input('id', 0);
        $row = $role->findOrFail($id);

        $items = json_decode($request->input('access', '[]'), true);
        $access = [];
        foreach ($items as $item) {
            array_push($access, new RoleAccess($item));
        }

        // 先清空原来数据再保存
        $row->accesses()->delete();
        return $row->accesses()->saveMany($access) ? $this->success('保存成功') : $this->error('保存失败');
    }

}
