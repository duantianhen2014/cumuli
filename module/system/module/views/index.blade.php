<table
    id="{{ attr_id('datagrid') }}"
    data-menu="#{{ attr_id('datagrid.menu') }}"
    data-toolbar="#{{ attr_id('datagrid.toolbar') }}"
    data-title="{{ trans('module.'. array_get($module, 'group')) }}/{{ array_get($module, 'composer.extra.module.name') }}"
    data-url="{{ array_get($module, 'url') }}"
    iconCls="{{ array_get($module, 'composer.extra.module.icon') }}">

    <thead>
    <tr>
        <th data-options="field:'username',width:100,sortable:true">用户名</th>
        <th data-options="field:'time',width:100,sortable:true">登录时间</th>
        <th data-options="field:'httpuseragent',width:250,sortable:true">浏览器标识</th>
        <th data-options="field:'ip',width:100,sortable:true">IP</th>
    </tr>
    </thead>
</table>

<div id="{{ attr_id('datagrid.toolbar') }}">
    {{ attr_id('datagrid.toolbar') }}
</div>

<div id="{{ attr_id('datagrid.menu') }}">
    {{ attr_id('datagrid.menu') }}
</div>

<script type="text/javascript">
    $.cumuli.datagrid.init('#{{ attr_id('datagrid') }}', {});
</script>
