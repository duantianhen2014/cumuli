<?php

namespace App\Http\Middleware;

use Closure;

class Module
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
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

        // 不使用权限控制的情况
        $action = module_action($module['action'], $module);
        if (array_get($action, 'access', true) === false) {
            return $next($request);
        }

        // 权限验证
        $access = accesses()->search(function ($item) use ($module, $action) {
            return in_array($item->group, ['*', array_get($module, 'group')]) &&
                in_array($item->module, ['*', array_get($module, 'module')]) &&
                in_array($item->access, ['*', array_get($action, 'title')]);
        });
        if ($access === false) {
            return abort(403);
        }

        return $next($request);
    }
}
