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
        return ['status' => 'error', 'message' => '功能完善中', 'total' => $modules->count(), 'rows' => $modules->toArray()];
    }

}
