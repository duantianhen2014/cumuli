<?php

namespace Module\System\Role;

use Illuminate\Http\Request;
use App\Role;
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
     * POST请求新增页面
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postCreate(Request $request)
    {
        return $this->success([
            'message' => '功能完善中'
        ]);
    }

    /**
     * GET请求编辑页面
     *
     * @return \Illuminate\View\View
     */
    public function getUpdate(Request $request, Role $role)
    {
        $id = $request->input('id');
        $row = $role->findOrFail($id);
        dd($row->toArray());
        return view('update', ['row' => $row]);
    }

    /**
     * POST请求编辑页面
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postUpdate(Request $request)
    {
        return $this->error([
            'message' => '功能完善中'
        ]);
    }

    /**
     * POST请求删除页面
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postDelete(Request $request)
    {
        return $this->error([
            'message' => '功能完善中'
        ]);
    }

}
