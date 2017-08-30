<?php

return [

    // 默认页面，可自行修改
    'page' => [
        'north' => '/system/page/north',           // 左侧菜单
        'west' => '/system/page/west',              // 左侧菜单
        'hash' => '/system/page/hash',              // hash地址解析
        'dashboard' => '/system/page/dashboard',  // 首页展示
    ],

    // 页面中的js配置项，调用位置 resources/views/layouts/app.blade.php
    'config' => [

        // 审批配置
        'flow' => [
            'href' => '/system/page/flow',
            'title' => '审批',
            'iconCls' => 'fa fa-gavel',
            'width' => 400,
            'height' => 400,
        ],

        // 上传配置
        'upload' => [
            'url' => config('filesystems.disks.public.url'),
        ],
    ],

];
