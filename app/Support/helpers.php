<?php

if (!function_exists('accesses')) {
    /**
     * 获取当前用户权限列表
     *
     * @return \Illuminate\Support\Collection|null
     */
    function accesses()
    {
        static $accesses = null;

        if (!is_null($accesses)) {
            return $accesses;
        }

        $accesses = collect([]);
        Auth::user()->roles()->get()->each(function ($role) use (&$accesses) {
            $accesses = $accesses->merge($role->accesses()->get())->unique(function ($item) {
                return implode('/', [$item->group, $item->module, $item->access]);
            });
        });
        return $accesses;
    }
}

if (!function_exists('attr_id')) {
    /**
     * 生成html属性ID
     *
     * @param mixed $group
     * @return string
     */
    function attr_id($group = null)
    {
        return 'id' . md5(var_export([$_SERVER, $group], true));
    }
}

if (!function_exists('breadcrumbs')) {
    /**
     * 面包屑
     *
     * @param string $path
     * @return string
     */
    function breadcrumbs($path = '')
    {
        $module = module($path);
        if (empty($module)) {
            return '';
        }

        $action = module_action($module['action'], $module);

        return implode('/', [
            trans('module.' . array_get($module, 'group')),
            array_get($module, 'composer.extra.module.module.title', array_get($module, 'module')),
            array_get($action, 'title'),
        ]);
    }
}

if (!function_exists('module')) {
    /**
     * 获取模块信息
     *
     * @param  string $name
     * @param  string $method
     * @return array|null
     */
    function module($name = '', $method = '')
    {
        static $modules = [];  // 优化多次获取模块信息

        try {
            $route = collect(explode('/', $name ? trim($name, '/') : app('request')->path()));
        } catch (\Exception $e) {
        }

        if (empty($route)) return null;

        if ($route->count() < 2) {
            return null;
        }

        // 模块名与当前url
        $name = "{$route->get(0)}/{$route->get(1)}";
        $url = $route->get(2) ? "{$name}/{$route->get(2)}" : $name;

        // 请求方式，默认为get
        $method = $method ?: app('request')->method();
        $method = strtolower($method);

        // 控制器参数
        $group = studly_case(strtolower($route->get(0)));
        $module = studly_case(strtolower($route->get(1)));
        $action = $method . studly_case(strtolower($route->get(2, 'index')));

        // 静态变量中获取
        if (array_has($modules, "{$group}.{$module}.{$action}")) {
            return array_get($modules, "{$group}.{$module}.{$action}", null);
        }

        // 控制器类名
        $controller = implode('\\', ['\\Module', $group, $module, 'Controller']);
        if (!class_exists($controller)) {
            return null;
        }

        // 通过类名获取模块文件信息
        $object = new ReflectionClass($controller);      // 反解析类文件信息
        $path = dirname(dirname($object->getFileName())); // 模块根目录

        if (!file_exists(realpath($path . '/composer.json'))) {
            return null;
        }

        // 获取composer配置信息，同时验证模块类型
        $composer = json_decode(file_get_contents(realpath($path . '/composer.json')), true);
        if (array_get($composer, 'type') != 'cumuli-module') {
            return null;
        }

        // 保存模块信息到静态变量
        array_set($modules, "{$group}.{$module}.{$action}", [
            'name' => $name,
            'url' => '/' . $url,
            'method' => $method,
            'controller' => $controller,
            'group' => $group,
            'module' => $module,
            'action' => $action,
            'reflection' => $object,
            'path' => $path,
            'composer' => $composer,
            'view' => [
                'paths' => [
                    realpath($path . '/views')
                ]
            ]
        ]);
        return array_get($modules, "{$group}.{$module}.{$action}", null);
    }
}

if (!function_exists('module_action')) {
    /**
     * 获取模块中action参数
     *
     * @param string $action
     * @param string|array $module
     * @return array
     */
    function module_action($action, $module = '')
    {
        if (!is_array($module)) {
            $module = module($module);
        }
        $url = explode('_', snake_case($action));
        array_shift($url);
        $url = '/' . implode('_', $url);

        $title = array_get($module, "composer.extra.module.action.{$action}", '-');
        $icon = array_get($module, "composer.extra.module.icon.{$title}", '');
        $access = array_get($module, "composer.extra.module.access.{$title}", true);

        // 整个模块不启动权限控制
        if (array_get($module, "composer.extra.module.module.access", true) === false) {
            $access = false;
        }

        return [
            'url' => '/' . $module['name'] . ($url == '/index' ? '' : $url),
            'icon' => $icon,
            'title' => $title,
            'access' => $action !== false,
        ];
    }
}

if (!function_exists('module_lang')) {
    /**
     * 获取模块多语言信息，用于自定义语言合并
     *
     * @return array
     */
    function module_lang()
    {
        static $lang = [];
        if (!empty($lang)) {
            return $lang;
        }

        if (!file_exists(base_path('module/lang.json'))) {
            return [];
        }
        if (!is_writeable(base_path('module/lang.json'))) {
            return [];
        }
        $lang = json_decode(file_get_contents(base_path('module/lang.json')), true);
        return $lang;
    }
}

if (!function_exists('module_menu')) {
    /**
     * 获取模块右键菜单
     *
     * @param string|array $module
     * @return string
     */
    function module_menu($module = '')
    {
        if (!is_array($module)) {
            $module = module($module);
        }
        return collect(array_get($module, 'composer.extra.module.menu', []))
            ->filter(function ($attributes, $title) use ($module) {
                return accesses()->search(function ($item) use ($module, $title) {
                        return in_array($item->group, ['*', array_get($module, 'group')]) &&
                            in_array($item->module, ['*', array_get($module, 'module')]) &&
                            in_array($item->access, ['*', $title]);
                    }) !== false;
            })
            ->map(function ($attributes, $title) use ($module) {
                $icon = array_get($module, "composer.extra.module.icon.{$title}", '');
                $class = 'handle ' . array_get($attributes, 'class', '');
                array_forget($attributes, 'class');

                $attrs = [];
                foreach ($attributes as $attribute => $value) {
                    array_push($attrs, "{$attribute}=\"{$value}\"");
                }
                $attrs = implode(' ', $attrs);

                return <<<HTML
<div class="$class" iconCls="$icon" $attrs>$title</div>
HTML;
            })
            ->implode('');
    }
}

if (!function_exists('module_toolbar')) {
    /**
     * 获取模块工具栏
     *
     * @param string|array $module
     * @return string
     */
    function module_toolbar($module = '')
    {
        if (!is_array($module)) {
            $module = module($module);
        }
        return collect(array_get($module, 'composer.extra.module.toolbar', []))
            ->filter(function ($attributes, $title) use ($module) {
                return accesses()->search(function ($item) use ($module, $title) {
                        return in_array($item->group, ['*', array_get($module, 'group')]) &&
                            in_array($item->module, ['*', array_get($module, 'module')]) &&
                            in_array($item->access, ['*', $title]);
                    }) !== false;
            })
            ->map(function ($attributes, $title) use ($module) {
                $icon = array_get($module, "composer.extra.module.icon.{$title}", '');
                $class = 'easyui-linkbutton handle ' . array_get($attributes, 'class', '');
                array_forget($attributes, 'class');
                if (!array_has($attributes, 'plain')) {
                    array_set($attributes, 'plain', 'true');
                }

                $attrs = [];
                foreach ($attributes as $attribute => $value) {
                    array_push($attrs, "{$attribute}=\"{$value}\"");
                }
                $attrs = implode(' ', $attrs);

                return <<<HTML
<a class="$class" iconCls="$icon" $attrs>$title</a>
HTML;
            })
            ->implode('');
    }
}

if (!function_exists('modules')) {
    /**
     * 获取所有模块信息
     *
     * @return array
     */
    function modules()
    {
        if (!file_exists(base_path('module/module.json'))) {
            return [];
        }
        if (!is_writeable(base_path('module/module.json'))) {
            return [];
        }
        return json_decode(file_get_contents(base_path('module/module.json')), true);
    }
}
