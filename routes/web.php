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

Route::get('/', function () {
    return view('welcome');
});

$route = collect(explode('/', app('request')->path()));

if ($route->count() >= 2) {

    // 控制器类名
    $controller = implode('\\', [
        '\\Module',
        studly_case(strtolower($route->get(0))),
        studly_case(strtolower($route->get(1))),
        'Controller'
    ]);

    if (class_exists($controller)) {

        $object = new \ReflectionClass($controller);      // 反解析类文件信息
        $path = dirname(dirname($object->getFileName())); // 模块根目录

        // 设置模板根目录，保证每个模块都是独立存在
        config([
            'view.paths' => [
                realpath($path . '/views')
            ],
        ]);

        Route::resource("{$route->get(0)}/{$route->get(1)}", $controller);
    }
}
