<table
    id="{{ attr_id('datagrid') }}"
    data-menu="#{{ attr_id('datagrid.menu') }}"
    data-toolbar="#{{ attr_id('datagrid.toolbar') }}"
    data-title="{{ trans('module.'. array_get($module, 'group')) }}/{{ array_get($module, 'composer.extra.module.name') }}"
    data-url="{{ array_get($module, 'url') }}"
    iconCls="{{ array_get($module, 'composer.extra.module.icon') }}">

    <thead>
    <tr>
        <th data-options="field:'name',width:20,sortable:false">模块</th>
        <th data-options="field:'path',width:50,sortable:false">目录</th>
        <th data-options="field:'composer',width:100,sortable:false,formatter:function(value,row,index){return  JSON.stringify(value)}">Composer配置</th>
    </tr>
    </thead>
</table>

{{--顶部工具栏--}}
<div id="{{ attr_id('datagrid.toolbar') }}">
    <a class="easyui-linkbutton toolbar-search" data-data="[
		{name:'开始时间',field:'time.begin', editor:{type:'datetimebox',options:{editable:false}},group:'登录时间'},
		{name:'结束时间',field:'time.end', editor:{type:'datetimebox',options:{editable:false}},group:'登录时间'},
		{name:'浏览器标识',field:'httpuseragent', editor:'text',group:'其他'},
		{name:'IP地址',field:'ip', editor:'text',group:'其他'}
	]" data-close="true" data-group="true" data-width="400" data-height="260" iconCls="fa fa-search" plain="true">搜索</a>
</div>

{{--右键菜单--}}
<div id="{{ attr_id('datagrid.menu') }}" class="easyui-menu">
    <div>{{ attr_id('datagrid.menu.1') }}</div>
    <div>{{ attr_id('datagrid.menu.2') }}</div>
    <div>{{ attr_id('datagrid.menu.3') }}</div>
    <div>{{ attr_id('datagrid.menu.4') }}</div>
    <div>{{ attr_id('datagrid.menu.5') }}</div>
</div>

<script type="text/javascript">
    $.cumuli.datagrid.init('#{{ attr_id('datagrid') }}', {
        //点击操作
        onClickCell: function(index, field, value){
            switch(field){
                //查看参数详情
                case 'composer':
                    $.cumuli.dialog.content(null, {
                        title       : '详细参数',
                        content     : '<pre>' + JSON.stringify(value, null, '  ') + '</pre>',
                        iconCls     : 'fa fa-file-o',
                        width       : 400,
                        height      : 300,
                        maximizable : true,
                        resizable   : true
                    });
                    break;
            }
        },
    });
</script>
