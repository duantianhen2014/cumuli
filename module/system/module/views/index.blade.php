<table
    id="{{ attr_id('datagrid') }}"
    data-menu="#{{ attr_id('datagrid.menu') }}"
    data-toolbar="#{{ attr_id('datagrid.toolbar') }}"
    data-title="{{ trans('module.'. array_get($module, 'group')) }}/{{ array_get($module, 'composer.extra.module.name') }}"
    data-url="{{ array_get($module, 'url') }}"
    iconCls="{{ array_get($module, 'composer.extra.module.icon') }}">

    <thead>
    <tr>
        <th data-options="field:'name',width:100,sortable:false">模块</th>
        <th data-options="field:'path',width:100,sortable:false">目录</th>
        <th data-options="field:'composer',width:500,sortable:false,formatter:function(value,row,index){return  JSON.stringify(value)}">Composer配置</th>
    </tr>
    </thead>
</table>

{{--<div id="{{ attr_id('datagrid.toolbar') }}">--}}
    {{--{{ attr_id('datagrid.toolbar') }}--}}
{{--</div>--}}

<div id="{{ attr_id('datagrid.menu') }}">
    {{ attr_id('datagrid.menu') }}
</div>

<script type="text/javascript">
    $.cumuli.datagrid.init('#{{ attr_id('datagrid') }}', {});
</script>
