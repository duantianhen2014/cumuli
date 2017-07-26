<?php

namespace Module\System\Role;

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
        return view('index', ['module' => module()]);
    }

    /**
     * POST请求入口页面
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function postIndex(Request $request)
    {
        return ['status' => 'error', 'message' => '功能完善中', 'total' => 0, 'rows' => []];
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
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function postCreate(Request $request)
    {
        return ['status' => 'error', 'message' => '功能完善中'];
    }

    /**
     * GET请求编辑页面
     *
     * @return \Illuminate\View\View
     */
    public function getUpdate()
    {
        return view('update');
    }

    /**
     * POST请求编辑页面
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function postUpdate(Request $request)
    {
        return ['status' => 'error', 'message' => '功能完善中'];
    }

    /**
     * POST请求删除页面
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function postDelete(Request $request)
    {
        return ['status' => 'error', 'message' => '功能完善中'];
    }

}
