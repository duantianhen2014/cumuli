<?php

namespace Module\System\Module;

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
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function postIndex(Request $request)
    {
        $modules = collect(modules())
            ->values();

        $page = $request->input('page');
        $size = $request->input('rows');

        return [
            'status' => 'success',
            'message' => '操作成功',
            'total' => $modules->count(),
            'rows' => $modules->toArray()
        ];
    }

}
