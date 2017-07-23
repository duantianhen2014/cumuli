<div class="easyui-accordion" data-options="fit:true,border:false">
    @forelse ($modules as $group => $data)
        <div title="@lang("group.{$group}")" iconCls="fa fa-folder-o">
            <ul class="easyui-tree" data-options='animate:true,lines:true,data:{{ json_encode($data) }}'></ul>
        </div>
    @empty
        <p align="center"><i>暂无数据</i></p>
    @endforelse
</div>

<script type="text/javascript">
    $('.easyui-tree').each(function () {
        $(this).tree({
            onClick: function (module) {
                console.log(module);
                $.cumuli.target.center(module);
            }
        });
    });
</script>
