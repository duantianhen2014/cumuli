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
        $modules = collect(modules())->values();

        // 分页信息
        $page = $request->input('page', 1);
        $rows = $request->input('rows', 20);

        // 排序，支持多个字段
        $sorts = collect(explode(',', $request->input('sort', 'name')))->reverse();
        $orders = collect(explode(',', $request->input('order', 'asc')))->reverse();
        $orders->each(function ($order, $key) use (&$modules, $sorts) {
            $modules = $order == 'asc' ? $modules->sortBy($sorts->get($key)) : $modules->sortByDesc($sorts->get($key));
        });

        return [
            'status' => 'success',
            'message' => '操作成功',
            'total' => $modules->count(),
            'rows' => $modules->forPage($page, $rows)->values()->toArray()
        ];
    }

}
