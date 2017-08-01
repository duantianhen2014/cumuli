<table id="{{ attr_id('datagrid') }}">
    <thead>
    <tr>
        <th data-options="field:'id',width:60,sortable:true">ID</th>
        <th data-options="field:'name',width:100,sortable:true">名称</th>
        <th data-options="field:'description',width:300,sortable:false">描述</th>
        <th data-options="field:'created_at',width:100,sortable:true">创建时间</th>
        <th data-options="field:'updated_at',width:100,sortable:true">更新时间</th>
    </tr>
    </thead>
</table>

{{--顶部工具栏--}}
<div id="{{ attr_id('datagrid.toolbar') }}">
    {!! module_toolbar() !!}

    {{--自定义不用控制权限的功能--}}
    <a class="easyui-linkbutton handle" handle="refresh" iconCls="fa fa-refresh" plain="true">刷新</a>
</div>

{{--右键菜单--}}
@if(module_menu())
    <div id="{{ attr_id('datagrid.menu') }}" class="easyui-menu">
        {!! module_menu() !!}
    </div>
@endif

<script type="text/javascript">
    $.cumuli.datagrid
        .init('#{{ attr_id('datagrid') }}', {
            title: '{{ breadcrumbs() }}',
            iconCls: '{{ $action['icon'] }}',
            url: '{{ $action['url'] }}',
            toolbar: '#{{ attr_id('datagrid.toolbar') }}',
            menu: '#{{ attr_id('datagrid.menu') }}',
        })
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
                field: 'description',
                type: 'textbox',
                options: {},
                op: ['contains', 'beginwith', 'endwith']
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
                        href: '/system/role/create',
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
                        href: '/system/role/update?id=' + row.id,
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
                        .post('/system/role/delete', {
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

            // 权限
            access: function (e, row) {
                if (!row) {
                    $.cumuli.message.show('未选择数据', 'error');
                    return false;
                }
                $.cumuli.dialog.page(e, {
                    title: $(e).text() + ' - ' + row.name,
                    href: '/system/role/access?id=' + row.id,
                    width: 600,
                    height: 500,
                    buttons: [
                        {
                            text: '确定',
                            iconCls: 'fa fa-check',
                            handler: function () {
                                // 获取列表中的选中项
                                var checked = [];
                                $('span.tree-checkbox.tree-checkbox1', $.cumuli.dialog.dialog)
                                    .each(function () {
                                        var field = {};
                                        $(this).parents('td[field]').siblings('td[field]').each(function () {
                                            field[$(this).attr('field')] = $(this).text();
                                        });
                                        checked.push(field);
                                    });

                                // 获取包含通配符的父级项
                                var wildcards = checked
                                    .filter(function (item) {
                                        return item.module == '*' || item.access == '*';
                                    })
                                    .map(function (item) {
                                        return [item.group, item.module, item.access].join('/');
                                    });

                                // 过滤通配符包含的选项
                                if (wildcards.length > 0) {
                                    checked = checked
                                        .filter(function (item) {
                                            // 选中整个分组的情况
                                            if (item.module == '*' && item.access == '*') return true;
                                            // 选中整个模块的情况
                                            if (item.access == '*') {
                                                return $.inArray([item.group, '*', '*'].join('/'), wildcards) === -1;
                                            }
                                            // 单个权限的情况
                                            return $.inArray([item.group, '*', '*'].join('/'), wildcards) === -1 && $.inArray([item.group, item.module, '*'].join('/'), wildcards) === -1;
                                        });
                                }

                                // TODO 转成字符再提交，防止超出服务器最大字段数
                                $.cumuli.request
                                    .post('/system/role/access_save', {
                                        id: row.id,
                                        access: JSON.stringify(checked)
                                    })
                                    .then(
                                        function () {
                                            $.cumuli.dialog.close();
                                        }, function (data) {
                                            $.cumuli.message.show(data.message, 'error');
                                        }
                                    );
                            }
                        },
                        {
                            text: '取消',
                            iconCls: 'fa fa-close',
                            handler: function () {
                                $.cumuli.dialog.close();
                            }
                        }
                    ]
                });
            },

            //刷新
            refresh: function () {
                $('#{{ attr_id('datagrid') }}').datagrid('reload');
            },
        });
</script>
