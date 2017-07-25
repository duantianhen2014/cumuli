<table id="{{ attr_id('propertygrid') }}"
       iconCls="{{ array_get($module, 'composer.extra.module.icon') }}"
       data-toolbar="#{{ attr_id('propertygrid.toolbar') }}"
       data-title="{{ breadcrumbs() }}"
       data-url="{{ array_get($module, 'url') }}"></table>

<div id="{{ attr_id('propertygrid.toolbar') }}">
    <a class="easyui-linkbutton" iconCls="fa fa-save" plain="true">保存</a>
    <a class="easyui-linkbutton" iconCls="fa fa-refresh" plain="true">刷新</a>
</div>

<script type="text/javascript">
    $.cumuli.propertygrid.init('#{{ attr_id('propertygrid') }}', {});
</script>
