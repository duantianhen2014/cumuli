<?php

namespace App\Http\Middleware;

use App\Console\Commands\deploy\module;
use Closure;

class Role
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
            return redirect('/');
        }

        // 获取当前模块信息
        $module = module();

        // 通过权限表进行匹配
        $where = [
            'group' => array_get($module, 'group'),
            'name' => array_get($module, 'name'),
            'action' => array_get($module, 'action'),
        ];

        return $next($request);
    }
}
