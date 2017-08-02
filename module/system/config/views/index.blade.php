<div class="easyui-panel" title="{{ breadcrumbs() }}" iconCls="{{ $action['icon'] }}" fit="true" border="false">

    <table id="{{ attr_id('propertygrid') }}" url="{{ $action['url'] }}"
           toolbar="#{{ attr_id('propertygrid.toolbar') }}"></table>

    <div id="{{ attr_id('propertygrid.toolbar') }}">
        {!! module_toolbar() !!}
        <a class="easyui-linkbutton handle" handle="refresh" iconCls="fa fa-refresh" plain="true">刷新</a>
    </div>

</div>

<script type="text/javascript">
    $.cumuli.propertygrid
        .init('#{{ attr_id('propertygrid') }}')
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
