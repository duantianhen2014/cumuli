<?php

namespace Module\System\Page;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as AppController;

class Controller extends AppController
{

    /**
     * 仪表盘
     *
     * @return \Illuminate\View\View
     */
    public function getDashboard()
    {
        return view('dashboard');
    }

    /**
     * 左侧菜单
     *
     * @return \Illuminate\View\View
     */
    public function getWest()
    {
        $modules = collect(modules())
            ->filter(function ($module) {
                return array_get($module, 'composer.extra.module.status.menu', true) !== false;
            })
            ->sortBy('composer.name')
            ->map(function ($module) {
                return [
                    'group' => array_get($module, 'group'),
                    'module' => array_get($module, 'module'),
                    'href' => '/' . trim(array_get($module, 'url'), '/'),
                    'text' => array_get($module, 'composer.extra.module.name', array_get($module, 'module')),
                    'title' => array_get($module, 'composer.extra.module.name', array_get($module, 'module')),
                    'iconCls' => array_get($module, 'composer.extra.module.icon'),
                ];
            })
            ->groupBy('group')
            ->toArray();

        return view('west', ['modules' => $modules]);
    }

    public function postHash(Request $request)
    {
        $path = $request->input('path');
        $module = module($path);
        if (!$module) {
            return abort(404);
        }

        return [
            'status' => 'success',
            'message' => '操作成功',
            'title' => array_get($module, 'composer.extra.module.name', '直接访问'),
            'href' => '/' . array_get($module, 'url'),
            'iconCls' => array_get($module, 'composer.extra.module.icon', 'fa fa-hashtag'),
        ];
    }

}
