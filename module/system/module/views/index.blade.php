<table id="{{ attr_id('datagrid') }}">
    <thead>
    <tr>
        <th data-options="field:'name',width:120,sortable:true">模块名</th>
        <th data-options="field:'path',width:250,sortable:true">目录</th>
        <th data-options="field:'group',width:80,sortable:true">分组</th>
        <th data-options="field:'module',width:80,sortable:true">模块</th>
        <th data-options="field:'composer.extra.module.module.action',width:60,sortable:true,formatter:function(value,row,index){return row.composer.extra.module.module.action}">
            入口
        </th>
        <th data-options="field:'composer.extra.module.module.title',width:100,sortable:true,formatter:function(value,row,index){return row.composer.extra.module.module.title}">
            名称
        </th>
        <th data-options="field:'composer.extra.module.module.icon',width:120,sortable:false,formatter:function(value,row,index){return row.composer.extra.module.module.icon}">
            图标
        </th>
        <th data-options="field:'composer.extra.module.module.access',width:60,sortable:true,formatter:function(value,row,index){return row.composer.extra.module.module.access !== false}">
            权限控制
        </th>
    </tr>
    </thead>
</table>

{{--顶部工具栏--}}
@if(module_toolbar())
    <div id="{{ attr_id('datagrid.toolbar') }}">
        {!! module_toolbar() !!}
    </div>
@endif

{{--右键菜单--}}
@if(module_menu())
    <div id="{{ attr_id('datagrid.menu') }}" class="easyui-menu">
        {!! module_menu() !!}
    </div>
@endif

<script type="text/javascript">
    $.cumuli.datagrid.init('#{{ attr_id('datagrid') }}', {
        title: '{{ breadcrumbs() }}',
        iconCls: '{{ $action['icon'] }}',
        url: '{{ $action['url'] }}',
        toolbar: '#{{ attr_id('datagrid.toolbar') }}',
        menu: '#{{ attr_id('datagrid.menu') }}',

        view: $.cumuli.variable.datagrid.detailview,

        detailFormatter: function (index, row) {
            return '<pre>' + JSON.stringify(row.composer, null, '  ') + '</pre>';
        },

        groupField: 'group',
        groupFormatter: function (group, rows) {
            return group + '分组 - ' + rows.length + ' 条数据';
        }

    });
</script>
