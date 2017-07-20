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

# 首页入口
Route::get('/', function () {
    return view('index');
})->middleware('auth');

# 身份认证
Auth::routes();

# 加载模块, 统一采用resource方式
$module = module();
if ($module) {
    Route::resource(array_get($module, 'name'), array_get($module, 'controller'));
}
