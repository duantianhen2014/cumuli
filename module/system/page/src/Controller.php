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
                return array_has($module, 'composer.extra.module.module.action');
            })
            ->sortBy('composer.name')
            ->map(function ($module) {
                $action = module_action(array_get($module, 'composer.extra.module.module.action'), $module['name']);
                return [
                    'group' => array_get($module, 'group'),
                    'module' => array_get($module, 'module'),
                    'href' => array_get($action, 'url'),
                    'text' => array_get($module, 'composer.extra.module.module.title', array_get($action, 'title')),
                    'title' => array_get($module, 'composer.extra.module.module.title', array_get($action, 'title')),
                    'iconCls' => array_get($module, 'composer.extra.module.module.icon', array_get($action, 'icon')),
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

        return $this->success([
            'title' => array_get($module, 'composer.extra.module.module.title', '直接访问'),
            'href' => array_get($module, 'url'),
            'iconCls' => array_get($module, 'composer.extra.module.module.icon', 'fa fa-hashtag'),
        ]);
    }

}
