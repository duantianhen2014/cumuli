<?php

if (!function_exists('module')) {
    /**
     * 获取模块信息
     *
     * @param  string $name
     * @return array|null
     */
    function module($name = '')
    {
        try {
            $route = collect(explode('/', $name ?: app('request')->path()));
        } catch (\Exception $e) {
        }

        if (empty($route)) return null;


        if ($route->count() < 2) {
            return null;
        }

        // 控制器类名
        $controller = implode('\\', [
            '\\Module',
            studly_case(strtolower($route->get(0))),
            studly_case(strtolower($route->get(1))),
            'Controller'
        ]);

        if (!class_exists($controller)) {
            return null;
        }

        $object = new ReflectionClass($controller);      // 反解析类文件信息
        $path = dirname(dirname($object->getFileName())); // 模块根目录

        return [
            'name' => "{$route->get(0)}/{$route->get(1)}",
            'controller' => $controller,
            'reflection' => $object,
            'path' => $path,
            'composer' => file_exists(realpath($path . '/composer.json')) ? realpath($path . '/composer.json') : null,
            'view' => [
                'paths' => [
                    realpath($path . '/views')
                ]
            ]
        ];
    }
}
