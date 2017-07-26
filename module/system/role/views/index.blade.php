<table id="{{ attr_id('datagrid') }}"
       data-menu="#{{ attr_id('datagrid.menu') }}"
       data-toolbar="#{{ attr_id('datagrid.toolbar') }}"
       data-title="{{ breadcrumbs() }}"
       data-url="{{ array_get($module, 'url') }}"
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

{{--顶部工具栏--}}
<div id="{{ attr_id('datagrid.toolbar') }}">
    <a class="easyui-linkbutton handle" data-handle="create" data-width="400" data-height="300"
       data-href="/system/role/create" data-cache="false" iconCls="fa fa-plus" plain="true">添加</a>
    <a class="easyui-linkbutton handle" data-handle="edit" data-width="400" data-height="300"
       data-href="/system/role/edit" data-cache="false" iconCls="fa fa-edit" plain="true">编辑</a>
    <a class="easyui-linkbutton handle" data-handle="delete" iconCls="fa fa-minus" plain="true">删除</a>
</div>

{{--右键菜单--}}
<div id="{{ attr_id('datagrid.menu') }}" class="easyui-menu">
    <div iconCls="fa fa-edit">编辑</div>
    <div iconCls="fa fa-minus">删除</div>
</div>

<script type="text/javascript">
    $.cumuli.datagrid.init('#{{ attr_id('datagrid') }}', {
        singleSelect: true,

        handle: {
            create: function (e, row, rows) {
                console.log('create', e);
                $.cumuli.dialog.form(e);
            },

            edit: function (e, row, rows) {
                console.log('edit', e);
                $.cumuli.dialog.form(e, {
                    href: $(e).data('href') + '?id=1',
                });
            },

            delete: function (e, row, rows) {
                console.log('delete', e);
                var that = this;
                $.messager.confirm('系统提示', '确定要继续吗？', function (res) {
                    if (!res) return false;

                    that.refresh();
                });
            },

            //刷新
            refresh: function () {
                $('#{{ attr_id('datagrid') }}').datagrid('reload');
            },
        },
    });
</script>
