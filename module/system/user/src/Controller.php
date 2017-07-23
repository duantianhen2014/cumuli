<?php

namespace Module\System\User;

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
        return view('index');
    }

    /**
     * POST请求入口页面
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function postIndex(Request $request)
    {
        return [];
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
        return [];
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
        return [];
    }

    /**
     * POST请求删除页面
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function postDelete(Request $request)
    {
        return [];
    }

}
