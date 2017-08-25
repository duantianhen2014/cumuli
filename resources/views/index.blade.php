@extends('layouts.app')

@section('content')

    {{--顶部工具栏区域--}}
    <div data-options="
        region:'north',
        split:false,
        border:true,
        title:'{{ config('app.name', 'Cumuli系统') }}',
        collapsible:true,
        hideCollapsedContent:false,
        iconCls:'{{ config('app.icon') }}',
        height:'auto',
        onLoad: function(){
            $('body').layout({fit: true});
        },
        href:'{{ config('module.page.north') }}'">
    </div>

    {{--左侧菜单区域--}}
    <div data-options="
        region:'west',
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
