<!doctype html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ elixir('css/app.css') }}" type="text/css"/>
    <link rel="stylesheet" href="{{ elixir('css/themes/black.css') }}" type="text/css" theme="black" disabled/>
    <link rel="stylesheet" href="{{ elixir('css/themes/bootstrap.css') }}" type="text/css" theme="bootstrap" disabled/>
    <link rel="stylesheet" href="{{ elixir('css/themes/default.css') }}" type="text/css" theme="default"/>
    <link rel="stylesheet" href="{{ elixir('css/themes/gray.css') }}" type="text/css" theme="gray" disabled/>
    <link rel="stylesheet" href="{{ elixir('css/themes/material.css') }}" type="text/css" theme="material" disabled/>
    <link rel="stylesheet" href="{{ elixir('css/themes/metro.css') }}" type="text/css" theme="metro" disabled/>
</head>
<body class="easyui-layout" fit="true">

{{--全屏加载效果--}}
<div class="cumuli-fullscreen-loading"
     style="position: absolute;top:0;right:0;bottom:0;left:0;background-color: white;font-size: 12px;padding: 5px;">
    Loading...
</div>

{{--顶部工具栏区域--}}
<div
    data-options="region:'north',split:false,border:true,title:'{{ config('app.name') }}',collapsible:false,iconCls:'fa fa-cloud',height:'auto'">

    {{--工具栏按钮--}}
    <a class="easyui-menubutton" data-options="menu:'.cumuli-toolbar-menu-group:first',hasDownArrow:false">分组</a>
    <a class="easyui-menubutton" data-options="menu:'.cumuli-toolbar-menu-collection:first',hasDownArrow:false">收藏</a>
    <a class="easyui-menubutton" data-options="menu:'.cumuli-toolbar-menu-display:first',hasDownArrow:false">显示</a>
    <a class="easyui-menubutton" data-options="menu:'.cumuli-toolbar-menu-help:first',hasDownArrow:false">帮助</a>

    {{--工具栏菜单--}}
    <div style="display: none">
        <div class="cumuli-toolbar-menu-group">
            <div class="cumuli-menu-select cumuli-target-west" data-href="/system/load/menu?group=system"
                 iconCls="fa fa-square-o">系统管理
            </div>
            <div class="cumuli-menu-select cumuli-target-west" data-href="/system/load/menu?group=other"
                 iconCls="fa fa-square-o">其他管理
            </div>
        </div>

        <div class="cumuli-toolbar-menu-collection">
            <div data-options="iconCls:'fa fa-tag'">
                <span>菜单</span>
                <div>
                    <div class="item" data-href="/system/menu">菜单管理</div>
                    <div class="item" data-href="/system/role">角色管理</div>
                    <div class="item" data-href="/system/user">用户管理</div>
                </div>
            </div>
        </div>

        <div class="cumuli-toolbar-menu-display">
            <div class="item" iconCls="fa fa-language">
                <span>语言设置</span>
                <div>
                    <div class="cumuli-window-location" data-href="/?locale=zh_CN" iconCls="flag-icon flag-icon-cn">
                        中文简体
                    </div>
                    <div class="cumuli-window-location" data-href="/?locale=en" iconCls="flag-icon flag-icon-gb">
                        English
                    </div>
                </div>
            </div>
            <div class="item" iconCls="fa fa-themeisle">
                <span>主题切换</span>
                <div>
                    <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-square-o">black</div>
                    <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-square-o">bootstrap</div>
                    <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-check-square-o">default</div>
                    <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-square-o">gray</div>
                    <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-square-o">material</div>
                    <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-square-o">metro</div>
                </div>
            </div>
        </div>

        <div class="cumuli-toolbar-menu-help">
            <div class="cumuli-window-open" iconCls="fa fa-globe" data-href="https://wangdong.io">官方网站</div>
            <div class="cumuli-window-open" iconCls="fa fa-github" data-href="https://github.com/repertory">获取源码</div>
            <div iconCls="fa fa-qrcode">
                <span>捐赠作者</span>
                <div class="menu-content" style="padding:10px">
                    <img src="/images/alipay.png" alt="支付宝捐赠" height="300">
                </div>
            </div>
            <div class="menu-sep"></div>
            <div iconCls="fa fa-question-circle">
                <span>关于</span>
                <div class="menu-content" style="padding:10px">
                    <b style="font-size: 24px">Cumuli系统</b>
                    <span>v1.0.0</span>
                </div>
            </div>
        </div>
    </div>

</div>

{{--左侧菜单区域--}}
<div data-options="region:'west',split:true,title:'Loading...',width:240">
    <div class="easyui-accordion" data-options="fit:true,border:false"></div>
</div>

{{--右侧内容区域--}}
<div data-options="region:'center'">
    <div class="easyui-tabs" data-options="tabPosition:'bottom',fit:true,border:false,plain:false">
        <div title="主页" href="/system/dashboard" data-options="cache:false,iconCls:'fa fa-home'"></div>
    </div>
</div>

{{--底部版权信息区域--}}
<div data-options="region:'south',split:false">
    <div align="center">&copy; 2017 {{ config('app.name') }}</div>
</div>

<div class="easyui-dialog cumuli-dialog" data-options="closed:true,title:'Loading...'"></div>

<script type="text/javascript" src="{{ elixir('js/app.js') }}"></script>
<script type="text/javascript" src="{{ elixir('js/locale/'. config('app.locale') .'.js') }}"></script>
<script type="text/javascript">
    $(document).ready(function () {
        // 默认选中第一个菜单分组
        $('.cumuli-menu-select:first', '.cumuli-toolbar-menu-group:first').trigger('click');

        // 关闭loading效果
        $('.cumuli-fullscreen-loading').fadeIn();
    });
</script>
</body>
</html>
