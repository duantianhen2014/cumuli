<?php

return [

    // 默认页面，可自行修改
    'page' => [
        'north' => '/system/page/north',           // 左侧菜单
        'west' => '/system/page/west',              // 左侧菜单
        'dashboard' => '/system/page/dashboard',  // 首页展示
    ],

    // 页面中的js配置项，调用位置 resources/views/layouts/app.blade.php
    'config' => [
        'upload' => [
            'url' => config('filesystems.disks.public.url'),
        ]
    ],

];
