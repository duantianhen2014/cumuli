<?php

namespace App\Http\Middleware;

use Closure;

class Module
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // 只允许ajax请求
        if (!$request->ajax()) {
            return redirect('/#/' . $request->path());
        }

        // 获取当前模块信息
        $module = module();

        // 模块不使用权限控制
        if (array_get($module, 'composer.extra.module.status.access', true) === false) {
            return $next($request);
        }

        // 单个功能不使用权限控制
        $menus = array_get($module, 'composer.extra.menu', []);
        if (!empty($menus)) {
            $access = true;
            collect($menus)
                ->filter(function ($option) use ($module) {
                    return in_array(array_get($module, 'action'), array_get($option, 'action', []));
                })
                ->each(function ($option) use (&$access) {
                    if (array_get($option, 'status.access', true) === false) {
                        $access = false;
                    }
                });

            // 当前action不受权限控制
            if (!$access) {
                return $next($request);
            }
        }


        // 通过权限表进行匹配
        $where = [
            'group' => array_get($module, 'group'),
            'module' => array_get($module, 'module'),
            'action' => array_get($module, 'action'),
        ];

        return $next($request);
    }
}
