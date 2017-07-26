<div id="{{ attr_id('panel') }}" class="easyui-panel" fit="true" title="{{ breadcrumbs() }}" iconCls="{{ array_get($module, 'composer.extra.module.icon') }}" border="false">
    <div>
        <pre>{{ var_export($module, true) }}</pre>
    </div>
</div>
