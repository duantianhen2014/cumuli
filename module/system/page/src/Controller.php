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
                array_forget($module, 'composer.extra.module.status');

                return array_merge(array_get($module, 'composer.extra.module'), [
                    'group' => array_get($module, 'group'),
                    'module' => array_get($module, 'module'),
                    'url' => array_get($module, 'url'),
                ]);
            })
            ->groupBy('group')
            ->toArray();

        return view('west', ['modules' => $modules]);
    }

}
