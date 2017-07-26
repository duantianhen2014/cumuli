@extends('layouts.app')

@section('content')
    {{--右侧内容区域--}}
    <div
        data-options="region:'center',border:false,title:'{{ config('app.name') }}',iconCls:'{{ config('app.icon') }}'">

        <div class="easyui-dialog" data-options="closed:true" style="width: 100%;max-width: 400px;padding: 30px 36px;">
            <form>

                <div>
                    <input class="easyui-textbox" type="email" name="email" style="width:100%;height:36px;padding:12px"
                           data-options="required:true,validType:'email',prompt:'请输入邮箱',iconCls:'fa fa-envelope',iconWidth:22">
                </div>
            </form>
        </div>

    </div>
@endsection

@section('script')
    <script type="text/javascript">
        $(document).ready(function () {
            $('.textbox-icon').css('lineHeight', '34px');
            $('.fa').css('color', 'black');

            $dialog = $('.easyui-dialog:first');
            $dialog.dialog({
                title: '密码重置',
                iconCls: 'fa fa-lock',
                closed: false,
                closable: false,
                constrain: true,
                buttons: [{
                    text: '发送邮件',
                    iconCls: 'fa fa-send',
                    handler: function () {
                        $dialog.find('form:first').form('submit', {
                            onSubmit: function () {
                                // 表单验证
                                let isValid = $(this).form('validate');
                                if (!isValid) return false;

                                // 表单提交
                                $.cumuli.request.post('{{ route('password.email') }}', this, function (data) {
                                    if (data.status == 'error') {
                                        return $.cumuli.message.show(data.message, 'error');
                                    }
                                    window.location.href = '/';
                                });

                                // 防止触发form提交
                                return false;
                            }
                        });
                    }
                }],
                onOpen: function () {
                    // 回车提交表单
                    $dialog.find('form:first').on('keyup', function (event) {
                        if (event.keyCode == 13) $dialog.dialog('options').buttons[0].handler();
                    });
                }
            });
        });
    </script>
@endsection
