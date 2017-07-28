<table id="{{ attr_id('propertygrid') }}"></table>

<div id="{{ attr_id('propertygrid.toolbar') }}">
    <a class="easyui-linkbutton handle" handle="save" iconCls="fa fa-save" plain="true">保存</a>
    <a class="easyui-linkbutton handle" handle="refresh" iconCls="fa fa-refresh" plain="true">刷新</a>
</div>

<script type="text/javascript">
    $.cumuli.propertygrid
        .init('#{{ attr_id('propertygrid') }}', {
            title: '{{ breadcrumbs() }}',
            iconCls: '{{ $action['icon'] }}',
            url: '{{ $action['url'] }}',
            toolbar: '#{{ attr_id('propertygrid.toolbar') }}',
        })
        .handle({
            save: function (e, row, rows, option) {
                console.log('save', [e, row, rows, option]);
            },
            refresh: function (e, row, rows, option) {
                console.log('refresh', [e, row, rows, option]);
                $('#{{ attr_id('propertygrid') }}').propertygrid('reload');
            }
        });
</script>
