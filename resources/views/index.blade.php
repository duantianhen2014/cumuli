@extends('layouts.app')

@section('content')

    {{--顶部工具栏区域--}}
    <div
        data-options="region:'north',split:false,border:true,title:'{{ config('app.name', 'Cumuli系统') }}',collapsible:false,iconCls:'{{ config('app.icon') }}',height:'auto'">

        {{--工具栏按钮--}}
        <a class="easyui-menubutton" data-options="menu:'.cumuli-toolbar-menu-account:first',hasDownArrow:false">账户</a>
        <a class="easyui-menubutton"
           data-options="menu:'.cumuli-toolbar-menu-collection:first',hasDownArrow:false">收藏</a>
        <a class="easyui-menubutton" data-options="menu:'.cumuli-toolbar-menu-display:first',hasDownArrow:false">显示</a>
        <a class="easyui-menubutton" data-options="menu:'.cumuli-toolbar-menu-help:first',hasDownArrow:false">帮助</a>

        {{--工具栏菜单--}}
        <div style="display: none">
            <div class="cumuli-toolbar-menu-account">
                <div iconCls="fa fa-user-circle-o">{{ $user->name ?: '-' }}</div>
                <div class="menu-sep"></div>
                <div class="cumuli-dialog-page" data-href="/system/page/profile" data-width="400" data-height="300" iconCls="fa fa-address-card-o">个人信息</div>
                <div class="cumuli-dialog-form" data-href="/system/page/password" data-width="400" data-height="300" iconCls="fa fa-edit">密码修改</div>
                <div class="menu-sep"></div>
                <div iconCls="fa fa-sign-out" class="cumuli-window-location-confirm" data-href="/logout"
                     data-msg="确定要退出登录吗？">退出登录
                </div>
            </div>

            <div class="cumuli-toolbar-menu-collection">
                <div iconCls="fa fa-link" data-href="/system/menu">菜单管理</div>
                <div iconCls="fa fa-link" data-href="/system/role">角色管理</div>
                <div iconCls="fa fa-link" data-href="/system/user">用户管理</div>
            </div>

            <div class="cumuli-toolbar-menu-display">
                <div iconCls="fa fa-language">
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
                <div iconCls="fa fa-themeisle">
                    <span>主题切换</span>
                    <div>
                        <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-square-o">black</div>
                        <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-square-o">bootstrap</div>
                        <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-square-o">default</div>
                        <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-square-o">gray</div>
                        <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-square-o">material</div>
                        <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-check-square-o">metro</div>
                    </div>
                </div>
            </div>

            <div class="cumuli-toolbar-menu-help">
                <div class="cumuli-window-open" iconCls="fa fa-globe" data-href="https://wangdong.io">官方网站</div>
                <div class="cumuli-window-open" iconCls="fa fa-github" data-href="https://github.com/repertory">获取源码
                </div>
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
    <div
        data-options="region:'west',split:true,title:'导航菜单',collapsedContent:'<div class=\'panel-title layout-expand-title\'>导航菜单</div>',hideCollapsedContent:false,iconCls:'fa fa-map-marker',width:240,href:'/system/page/west'"></div>

    {{--右侧内容区域--}}
    <div data-options="region:'center'">
        <div class="easyui-tabs" data-options="tabPosition:'bottom',fit:true,border:false,plain:false">
            <div title="主页" data-options="cache:false,iconCls:'fa fa-home',href:'/system/page/dashboard'"></div>
        </div>
    </div>
@endsection

@section('script')
    <script type="text/javascript">
        $(document).ready(function () {
            if (window.location.hash) {
                console.info('hash', window.location.hash.replace('#', ''));
            }
        });
    </script>
@endsection
