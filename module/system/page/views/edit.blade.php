<form style="padding: 10px">
    <table cellpadding="5">
        <tr>
            <td width="40">名称</td>
            <td>
                <input type="text" name="name" value="{{ $user->name }}" style="width: 266px;" class="easyui-textbox"
                       data-options="required:true,prompt:'请输入名称',validType:{length: [2, 20]}">
            </td>
        </tr>
        <tr>
            <td>邮箱</td>
            <td>
                <input type="text" name="email" value="{{ $user->email }}" style="width: 266px;" class="easyui-textbox"
                       data-options="required:true,prompt:'请输入邮箱',validType:{email: true, remote: ['/system/page/exists_email?reverse=true&current={{ $user->email }}','email']}">
            </td>
        </tr>
    </table>
</form>
