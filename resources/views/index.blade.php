@extends('layouts.app')

@section('content')

    {{--顶部工具栏区域--}}
    <div
        data-options="region:'north',split:false,border:true,title:'{{ config('app.name', 'Cumuli系统') }}',collapsible:false,iconCls:'{{ config('app.icon') }}',height:'auto'">

        {{--工具栏按钮--}}
        <a class="easyui-menubutton" data-options="menu:'#{{ attr_id('menu.account') }}',hasDownArrow:false">账户</a>
        <a class="easyui-menubutton"
           data-options="menu:'#{{ attr_id('menu.collect') }}',hasDownArrow:false">收藏</a>
        <a class="easyui-menubutton" data-options="menu:'#{{ attr_id('menu.display') }}',hasDownArrow:false">显示</a>
        <a class="easyui-menubutton" data-options="menu:'#{{ attr_id('menu.help') }}',hasDownArrow:false">帮助</a>

        {{--工具栏菜单--}}
        <div style="display: none">
            <div id="{{ attr_id('menu.account') }}">
                <div class="cumuli-dialog-page" data-href="{{ config('module.page.profile') }}" data-width="400"
                     data-height="300" iconCls="fa fa-user-circle-o">{{ $user->name ?: '-' }}</div>
                <div class="menu-sep"></div>
                <div class="cumuli-dialog-form" data-href="{{ config('module.page.edit') }}" data-width="400"
                     data-height="300" iconCls="fa fa-address-card-o">个人资料
                </div>
                <div class="cumuli-dialog-form" data-href="{{ config('module.page.password') }}" data-width="400"
                     data-height="300" iconCls="fa fa-edit">密码修改
                </div>
                <div class="menu-sep"></div>
                <div iconCls="fa fa-sign-out" class="cumuli-window-location-confirm" data-href="/logout"
                     data-msg="确定要退出登录吗？">退出登录
                </div>
            </div>

            <div id="{{ attr_id('menu.collect') }}">
                <div class="cumuli-page-collect" iconCls="fa fa-plus">添加收藏</div>
                <div iconCls="fa fa-link">
                    <span>收藏列表</span>
                    <div></div>
                </div>
            </div>

            <div id="{{ attr_id('menu.display') }}">
                <div iconCls="fa fa-language">
                    <span>语言设置</span>
                    <div>
                        <div class="cumuli-window-location" data-href="/?locale=zh_CN" iconCls="flag-icon flag-icon-cn">
                            简体中文
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
                        <div class="cumuli-theme-change cumuli-menu-select" iconCls="fa fa-square-o">metro</div>
                    </div>
                </div>
            </div>

            <div id="{{ attr_id('menu.help') }}">
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
                        <span>{{ config('app.version') }}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>

    {{--左侧菜单区域--}}
    <div data-options="region:'west',
        split:true,
        title:'导航菜单',
        collapsedContent:'<div class=\'panel-title layout-expand-title\'>导航菜单</div>',
        hideCollapsedContent:false,
        iconCls:'fa fa-map-marker',
        width:240,
        href:'{{ config('module.page.west') }}',
        tools:[{
            iconCls:'icon-reload',
            handler:function(){
                $('body').layout('panel', 'west').eq(0).panel('refresh');
            }
        }]"></div>

    {{--右侧内容区域--}}
    <div data-options="region:'center'">
        <div class="easyui-tabs" data-options="tabPosition:'bottom',fit:true,border:false,plain:false">
            <div title="主页"
                 data-options="cache:true,iconCls:'fa fa-home',href:'{{ config('module.page.dashboard') }}'"></div>
        </div>
    </div>
@endsection

@section('script')
    <script type="text/javascript">
        $(document).ready(function () {
            if (window.location.hash) {
                $.cumuli.request
                    .post('/system/page/hash', {path: window.location.hash.replace('#', '')})
                    .then(function (data) {
                        $.cumuli.page.open(null, data);
                    });
            }
        });
    </script>
@endsection
