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
        return view('index', ['module' => module()]);
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
        return $this->error([
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
        $row = $role->find($id);
        dd($row);
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
