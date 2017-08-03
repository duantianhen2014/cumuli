<?php

return [

    // 默认页面，可自行修改
    'page' => [
        'dashboard' => '/system/page/dashboard',  // 首页展示
        'west' => '/system/page/west',              // 左侧菜单
        'profile' => '/system/page/profile',       // 个人信息
        'edit' => '/system/page/edit',              // 个人资料
        'password' => '/system/page/password',     // 密码修改
    ],

    // 上传配置
    'upload' => [
        'driver' => 'local',       // 使用本地文件上传
        'size' => 5 * 1024 * 1024, // 上传大小限制
        'exts' => [                 // 扩展名支持
            'png', 'jpg', 'jpeg', 'gif', 'bmp',
            'flv', 'swf', 'mkv', 'avi', 'rm', 'rmvb', 'mpeg', 'mpg',
            'ogg', 'ogv', 'mov', 'wmv', 'mp4', 'webm', 'mp3', 'wav', 'mid',
            'rar', 'zip', 'tar', 'gz', '7z', 'bz2', 'cab', 'iso',
            'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'pdf', 'txt', 'md', 'xml',
        ],
    ],

    // 图片水印设置
    'water' => [
        'driver' => 'gd',          // 或者使用Imagemagick(需安装php-imagick扩展)
        'status' => false,        // 启动水印功能
        'mode' => 'text',         // 水印模式,text: 文字水印 image: 图片水印
        'text' => 'Cumuli系统',  // 水印文字
        'color' => '#305697',    // 文字颜色
        'size' => 30,              // 文字大小
        'image' => '',            // 水印图片路径
        'position' => 9,          // 九宫格位置
        'x' => 0,                  // x轴位移
        'y' => 0,                  // y轴位移
    ],

];
