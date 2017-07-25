<div id="{{ attr_id('accordion') }}" class="easyui-accordion" data-options="fit:true,border:false">
    @forelse ($modules as $group => $data)
        <div title="@lang("module.{$group}")" iconCls="fa fa-folder-o">
            <ul class="easyui-tree" data-options='animate:true,lines:true,data:{{ json_encode($data) }}'></ul>
        </div>
    @empty
        <p align="center"><i>暂无数据</i></p>
    @endforelse
</div>

<script type="text/javascript">
    $('.easyui-tree', '#{{ attr_id('accordion') }}').each(function () {
        $(this).tree({
            onClick: function (module) {
                $.cumuli.page.open(null, module);
            }
        });
    });
</script>
