<div class="easyui-panel" title="{{ breadcrumbs() }}" iconCls="{{ $action['icon'] }}" fit="true" border="false">

    {{--列表展示--}}
    <table id="{{ attr_id('datagrid') }}" url="{{ $action['url'] }}" toolbar="#{{ attr_id('datagrid.toolbar') }}"
           menu="#{{ attr_id('datagrid.menu') }}">
        <thead>
        <tr>
            <th data-options="field:'id',width:60,sortable:true">ID</th>
            <th data-options="field:'name',width:100,sortable:true">名称</th>
            <th data-options="field:'email',width:150,sortable:true">邮箱</th>
            <th data-options="field:'roles',width:150,sortable:false">角色</th>
            <th data-options="field:'created_at',width:100,sortable:true">创建时间</th>
            <th data-options="field:'updated_at',width:100,sortable:true">更新时间</th>
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
</div>

<script type="text/javascript">
    $.cumuli.datagrid
        .init('#{{ attr_id('datagrid') }}')
        .filter([
            {
                field: 'id',
                type: 'numberbox',
                options: {min: 0},
                op: ['equal', 'notequal', 'less', 'lessorequal', 'greater', 'greaterorequal']
            },
            {
                field: 'name',
                type: 'textbox',
                options: {},
                op: ['contains', 'beginwith', 'endwith']
            },
            {
                field: 'email',
                type: 'textbox',
                options: {},
                op: ['contains', 'beginwith', 'endwith']
            },
            {
                field: 'roles',
                type: 'label',
                options: {},
                op: []
            },
            {
                field: 'created_at',
                type: 'datetimebox',
                options: {editable: false},
                op: ['equal', 'notequal', 'less', 'greater']
            },
            {
                field: 'updated_at',
                type: 'datetimebox',
                options: {editable: false},
                op: ['equal', 'notequal', 'less', 'greater']
            }
        ])
        .handle({
            // 新增
            create: function (e) {
                var that = this;
                $.cumuli.dialog
                    .form(e, {
                        href: '/system/user/create',
                        width: 375,
                        height: 245,
                    })
                    .then(that.refresh);
            },

            // 编辑
            update: function (e, row) {
                if (!row) {
                    $.cumuli.message.show('未选择数据', 'error');
                    return false;
                }

                var that = this;
                $.cumuli.dialog
                    .form(e, {
                        title: $(e).text() + ' - ' + row.name,
                        href: '/system/user/update?id=' + row.id,
                        width: 375,
                        height: 245,
                    })
                    .then(that.refresh);
            },

            // 删除
            delete: function (e, row) {
                if (!row) {
                    $.cumuli.message.show('未选择数据', 'error');
                    return false;
                }

                var that = this;
                $.messager.confirm('系统提示', '确定要继续吗？', function (res) {
                    if (!res) return false;

                    $.cumuli.request
                        .post('/system/user/delete', {
                            id: row.id
                        })
                        .then(
                            function () {
                                that.refresh();
                            },
                            function (data) {
                                $.cumuli.message.show(data.message, 'error');
                            }
                        );
                });
            },

            //刷新
            refresh: function () {
                $('#{{ attr_id('datagrid') }}').datagrid('reload');
            },
        });
</script>
