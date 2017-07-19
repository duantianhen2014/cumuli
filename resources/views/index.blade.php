<!doctype html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Cumuli系统</title>
    <link rel="stylesheet" href="{{ elixir('css/app.css') }}" type="text/css"/>
</head>
<body class="easyui-layout" fit="true">

{{--全屏加载效果--}}
<div class="cumuli-fullscreen-loading"
     style="position: absolute;top:0;right:0;bottom:0;left:0;background-color: white;font-size: 12px;padding: 5px;">
    Loading...
</div>

{{--顶部工具栏区域--}}
<div
    data-options="region:'north',split:false,border:true,title:'Cumuli系统',collapsible:false,iconCls:'fa fa-puzzle-piece',height:'auto'">

    {{--工具栏按钮--}}
    <a class="easyui-menubutton" data-options="menu:'.cumuli-toolbar-menu-group:first',hasDownArrow:false">分组</a>
    <a class="easyui-menubutton" data-options="menu:'.cumuli-toolbar-menu-collection:first',hasDownArrow:false">收藏</a>
    <a class="easyui-menubutton" data-options="menu:'.cumuli-toolbar-menu-window:first',hasDownArrow:false">窗口</a>
    <a class="easyui-menubutton" data-options="menu:'.cumuli-toolbar-menu-help:first',hasDownArrow:false">帮助</a>

    {{--工具栏菜单--}}
    <div style="display: none">
        <div class="cumuli-toolbar-menu-group">
            <div class="item" data-href="/system/load/menu?group=system" iconCls="fa fa-square-o">系统管理</div>
            <div class="item" data-href="/system/load/menu?group=other" iconCls="fa fa-square-o">其他管理</div>
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

        <div class="cumuli-toolbar-menu-window">
            <div class="item" data-options="iconCls:'fa fa-language'">语言设置</div>
            <div class="item" data-options="iconCls:'fa fa-themeisle'">主题切换</div>
        </div>

        <div class="cumuli-toolbar-menu-help">
            <div class="cumuli-window-open" data-href="https://wangdong.io" data-options="iconCls:'fa fa-globe'">官方网站
            </div>
            <div class="cumuli-dialog-page" data-width="600" data-height="400" data-restful="destroy"
                 data-icon="fa fa-github" data-href="/system/test" data-href2="https://github.com/repertory"
                 data-options="iconCls:'fa fa-github'">获取源码
            </div>
            <div class="menu-sep"></div>
            <div data-options="iconCls:'fa fa-question-circle'">
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
        <div title="主页" href="/dashboard/welcome" data-options="cache:false,iconCls:'fa fa-home'"></div>
    </div>
</div>

{{--底部版权信息区域--}}
<div data-options="region:'south',split:false">
    <div align="center">&copy; 2017 Cumuli系统</div>
</div>

<div class="easyui-dialog cumuli-dialog" data-options="closed:true,title:'Loading...'"></div>

<script type="text/javascript" src="{{ elixir('js/app.js') }}"></script>
<script type="text/javascript">
    $(document).ready(function () {

        // 点击菜单分组后在左侧区域打开
        $('.item', '.cumuli-toolbar-menu-group:first').on('click', function () {
            let option = {
                href: $(this).data('href'),
                title: $(this).text(),
                icon: $(this).data('icon') || 'fa fa-folder-o',
            };

            $(this).menu('setIcon', {target: this, iconCls: 'fa fa-check-square-o'});
            $(this).siblings().each(function () {
                if ($(this).hasClass('menu-item')) {
                    $(this).menu('setIcon', {target: this, iconCls: 'fa fa-square-o'});
                }
            });

            $.read(option.href).then(function (res) {
                console.info(res);
            }, function (err) {
                console.error(err);
            });

            //加个判断，防止多次点击重复加载
//            const options = $('body').layout('panel', 'west').panel('options');
//            if (option.title == options.title) return false;
        });

        // 默认选中第一个菜单分组
        $('.item:first', '.cumuli-toolbar-menu-group:first').trigger('click');

        $('.cumuli-fullscreen-loading').fadeIn();  // 关闭加载效果

    });
</script>
</body>
</html>
