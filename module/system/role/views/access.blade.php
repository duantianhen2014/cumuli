<table id="{{ attr_id('treegrid')  }}">
    <thead>
    <tr>
        <th data-options="field:'name',width:100">名称</th>
        <th data-options="field:'group',width:50">分组</th>
        <th data-options="field:'module',width:50">模块</th>
        <th data-options="field:'access',width:50">权限</th>
    </tr>
    </thead>
</table>

<!--工具栏-->
<div id="{{ attr_id('treegrid.toolbar') }}">
    <a class="easyui-linkbutton handle" handle="collapseAll" iconCls="fa fa-folder-o" plain="true">收起</a>
    <a class="easyui-linkbutton handle" handle="expandAll" iconCls="fa fa-folder-open-o" plain="true">展开</a>
    <a class="easyui-linkbutton handle" handle="refresh" iconCls="fa fa-refresh" plain="true">刷新</a>
</div>

<script type="text/javascript">
    $.cumuli.treegrid
        .init('#{{ attr_id('treegrid') }}', {
            url: '{{ $action['url'] }}',
            toolbar: '#{{ attr_id('treegrid.toolbar') }}',
            pagination: false,
            checkbox: true,
            idField: 'id',
            treeField: 'name',
        })
        .handle({
            //收起全部
            collapseAll: function () {
                $('#{{ attr_id('treegrid') }}').treegrid('collapseAll');
            },

            //展开全部
            expandAll: function () {
                $('#{{ attr_id('treegrid') }}').treegrid('expandAll');
            },

            //刷新
            refresh: function () {
                $('#{{ attr_id('treegrid') }}').treegrid('reload');
            },
        });
</script>
