@extends('layouts.app')

@section('content')
    {{--右侧内容区域--}}
    <div
        data-options="region:'center',border:false,title:'{{ config('app.name') }}',iconCls:'{{ config('app.icon') }}'">

        <div class="easyui-dialog" data-options="closed:true" style="width: 100%;max-width: 400px;padding: 30px 36px;">
            <form>

                <div style="margin-bottom:20px;">
                    <input class="easyui-textbox" type="email" name="email" style="width:100%;height:36px;padding:12px"
                           data-options="required:true,validType:'email',prompt:'请输入邮箱',iconCls:'fa fa-envelope',iconWidth:22">
                </div>
                <div style="margin-bottom:20px">
                    <input class="easyui-passwordbox" type="password" name="password"
                           style="width:100%;height:36px;padding:12px"
                           data-options="required:true,validType:{length:[6,20]},prompt:'请输入密码',showEye:false,iconCls:'fa fa-lock',iconWidth:20">
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="remember">
                        <span>记住我</span>
                    </label>

                    <a href="{{ route('password.request') }}" style="float: right">找回密码</a>
                    <div style="clear: both"></div>
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
                title: '用户登录',
                iconCls: 'fa fa-user',
                closed: false,
                closable: false,
                constrain: true,
                buttons: [{
                    text: '登录',
                    iconCls: 'fa fa-sign-in',
                    handler: function () {
                        $dialog.find('form:first').form('submit', {
                            onSubmit: function () {
                                // 表单验证
                                let isValid = $(this).form('validate');
                                if (!isValid) return false;

                                // 表单提交
                                $.cumuli.request
                                    .post('{{ route('login') }}', this)
                                    .then(
                                        function (data) {
                                            window.location.href = '/';
                                        },
                                        function (data) {
                                            return $.cumuli.message.show(data.message, 'error');
                                        }
                                    );

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
