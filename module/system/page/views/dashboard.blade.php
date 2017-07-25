<div id="{{ attr_id('panel') }}" class="easyui-panel"
     data-options="fit:true,title:'仪表盘',border:false,iconCls:'fa fa-dashboard'">

    <div class="easyui-portal">
        <div style="width:50%">
            <div title="面板1" collapsible="true">
                111111111
            </div>

            <div title="面板2" collapsible="true">
                22222222222
            </div>

        </div>

        <div style="width:50%">
            <div title="面板3" collapsible="true">
                333333333
            </div>

            <div title="面板4" collapsible="true">
                444444444444
            </div>

        </div>

    </div>
</div>

<script type="text/javascript">
    $('#{{ attr_id('panel') }}').panel({
        onResize: function () {
            $('.easyui-portal:first', this).portal({
                fit: true,
                border: false
            });
        }
    });

</script>
