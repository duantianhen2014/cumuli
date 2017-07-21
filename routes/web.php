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

// 首页入口
Route::get('/', function () {
    return view('index', ['user' => Auth::user()]);
})->middleware('auth');

// 身份认证
Auth::routes();

// 加载模块, 统一采用以前版本的controller方式
$module = module();
if ($module) {
    $method = array_get($module, 'method');
    $url = array_get($module, 'url');
    $class = array_get($module, 'class');
    $action = array_get($module, 'action');

    Route::$method($url, "{$class}@{$action}")->middleware(['auth', 'role']);
}
