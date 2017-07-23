<div class="easyui-accordion" data-options="fit:true,border:false">
    @forelse ($modules as $group => $module)
        <div title="{{ $group }}">
            <div>
                <pre>{{ var_export($module, true) }}</pre>
            </div>
        </div>
    @empty
        <p align="center">暂无数据</p>
    @endforelse
</div>

<script type="text/javascript">
    //    $()
</script>
