<table id="{{ attr_id('datagrid') }}" data-title="{{ breadcrumbs() }}" data-url="{{ array_get($module, 'url') }}"
       iconCls="{{ array_get($module, 'composer.extra.module.icon') }}">
    <thead>
    <tr>
        <th data-options="field:'name',width:120,sortable:false">模块</th>
        <th data-options="field:'path',width:260,sortable:false">目录</th>
        <th data-options="field:'group',width:80,sortable:false">分组</th>
        <th data-options="field:'composer.extra.module.name',width:100,sortable:false,formatter:function(value,row,index){return  row.composer.extra.module.name}">
            名称
        </th>
        <th data-options="field:'composer.extra.module.icon',width:120,sortable:false,formatter:function(value,row,index){return  row.composer.extra.module.icon}">
            图标
        </th>
        <th data-options="field:'composer.extra.module.status.menu',width:60,sortable:false,formatter:function(value,row,index){return  row.composer.extra.module.status.menu}">
            菜单显示
        </th>
        <th data-options="field:'composer.extra.module.status.access',width:60,sortable:false,formatter:function(value,row,index){return  row.composer.extra.module.status.access}">
            权限控制
        </th>
    </tr>
    </thead>
</table>

<script type="text/javascript">
    $.cumuli.datagrid.init('#{{ attr_id('datagrid') }}', {
        singleSelect: true,
        view: $.cumuli.variable.datagrid.detailview,

        detailFormatter: function (rowIndex, rowData) {
            return '<pre>' + JSON.stringify(rowData, null, '  ') + '</pre>';
        },

        groupField: 'group',
        groupFormatter: function (value, rows) {
            return value + ' - ' + rows.length + ' Item(s)';
        }
    });
</script>
