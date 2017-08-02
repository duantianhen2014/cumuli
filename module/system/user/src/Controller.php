<?php

namespace Module\System\User;

use App\User;
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
     * 获取列表数据
     *
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function postIndex(Request $request, User $user)
    {
        // 字段筛选
        $filterRules = collect(json_decode($request->input('filterRules', '[]'), true));
        $filterRules->each(function ($rule) use (&$user) {
            $field = array_get($rule, 'field');
            $value = array_get($rule, 'value');
            $op = array_get($rule, 'op');

            switch ($op) {
                case 'contains':
                    $value = str_replace('%', '\%', $value);
                    $user = $user->where($field, 'like', "%{$value}%");
                    break;
                case 'beginwith':
                    $value = str_replace('%', '\%', $value);
                    $user = $user->where($field, 'like', "{$value}%");
                    break;
                case 'endwith':
                    $value = str_replace('%', '\%', $value);
                    $user = $user->where($field, 'like', "%{$value}");
                    break;
                case 'equal':
                    $user = $user->where($field, $value);
                    break;
                case 'notequal':
                    $user = $user->where($field, '<>', $value);
                    break;
                case 'less':
                    $value = intval($value);
                    $user = $user->where($field, '<', $value);
                    break;
                case 'lessorequal':
                    $value = intval($value);
                    $user = $user->where($field, '<=', $value);
                    break;
                case 'greater':
                    $value = intval($value);
                    $user = $user->where($field, '>', $value);
                    break;
                case 'greaterorequal':
                    $value = intval($value);
                    $user = $user->where($field, '>=', $value);
                    break;
            }
        });

        // 支持多个字段排序
        $sorts = collect(explode(',', $request->input('sort', 'id')));
        $orders = collect(explode(',', $request->input('order', 'desc')));
        $orders->each(function ($order, $key) use (&$user, $sorts) {
            $user = $user->orderBy($sorts->get($key), $order);
        });

        // 分页
        $paginate = $user->paginate($request->input('rows', 20));

        return $this->success([
            'total' => $paginate->total(),
            'rows' => $paginate->map(function ($item) {
                $item->roles = $item->roles()->get()->pluck('name')->implode(',');
                return $item;
            }),
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
     * 处理新增数据
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postCreate(Request $request)
    {
        $user = new User($request->only(['name', 'email', 'password']));
        $status = $user->save();

        // 更新中间表
        if ($status && $request->has('role')) {
            $user->roles()->attach(array_unique($request->input('role')));
        }

        return $status ? $this->success('添加成功') : $this->error('添加失败');
    }

    /**
     * 编辑页面
     *
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getUpdate(Request $request, User $user)
    {
        $row = $user->findOrFail($request->input('id', 0));
        return view('update', ['row' => $row]);
    }

    /**
     * 提交编辑数据
     *
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function postUpdate(Request $request, User $user)
    {
        $row = $user->findOrFail($request->input('id', 0));

        $row->name = $request->input('name');
        $row->email = $request->input('email');

        // 填了密码才进行修改
        if ($request->input('password')) {
            $row->password = $request->input('password');
        }

        $status = $row->save();

        // 更新中间表，默认用户不修改角色
        if ($row->id > 1 && $status && $request->has('role')) {
            $row->roles()->detach();
            $row->roles()->attach(array_unique($request->input('role')));
        }

        return $status ? $this->success('修改成功') : $this->error('修改失败');
    }

    /**
     * 删除数据
     *
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function postDelete(Request $request, User $user)
    {
        $id = $request->input('id', 0);
        if ($id == 1) {
            return $this->error('系统默认用户，禁止删除');
        }
        $row = $user->findOrFail($id);
        $row->roles()->detach();  // 删除关联数据
        return $row->delete() ? $this->success('删除成功') : $this->error('删除失败');
    }

    /**
     * 验证邮箱是否存在 TODO 比较特殊的情况,返回字符类型的 true|false
     *
     * @param Request $request
     * @param User $user
     * @return string
     */
    public function postExistsEmail(Request $request, User $user)
    {
        $email = $request->input('email');

        // 过滤默认值的情况
        if ($request->has('current') && $request->input('current') == $email) {
            $exists = false;
        } else {
            $exists = $user->where('email', $email)->exists();
        }

        // 颠倒返回结果
        if ($request->has('reverse')) {
            $exists = !$exists;
        }

        return var_export($exists, true);
    }
}
