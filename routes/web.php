<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// 身份认证
Auth::routes();

// 入口页面
Route::get('/', function () {
    return view('index', ['user' => Auth::user()]);
})->middleware('auth');

// 退出登录
Route::any('logout', function () {
    Auth::logout();
    return redirect('/');
})->middleware('auth');

// 加载模块, 统一采用以前版本的controller方式
$module = module();
if ($module) {
    $method = array_get($module, 'method');
    $url = array_get($module, 'url');
    $controller = array_get($module, 'controller');
    $action = array_get($module, 'action');

    // 验证控制器中对应方法是否存在，否则模块路由无效
    if (method_exists($controller, $action)) {
        Route::$method($url, "{$controller}@{$action}")->middleware(['auth', 'role']);
    }

}
