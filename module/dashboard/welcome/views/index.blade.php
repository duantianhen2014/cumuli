<div class="easyui-panel" data-options="fit:true,title:'dashboard/welcome',border:false">
    <div class="easyui-portal">
        <div style="width:50%">
            <div title="面板1" collapsible="true">
                <foreach name="loginList" item="log">
                    11111111111111111111111<br/>
                </foreach>
            </div>

            <div title="面板2" collapsible="true">
                22222222222222222222222222222222222<br/>
            </div>

        </div>

        <div style="width:50%">
            <div title="面板3" collapsible="true">
                333333333333333333333<br/>
            </div>

            <div title="面板4" collapsible="true">
                444444444444444444444444444444444
            </div>

        </div>

    </div>
</div>

<script type="text/javascript">
    (function () {
        $('.easyui-panel:first').panel({
            onResize: function () {
                $('.easyui-portal:first', this).portal({
                    fit: true,
                    border: false
                })
            }
        });
    })();
</script>
