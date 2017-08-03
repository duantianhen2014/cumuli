<form style="padding: 10px">
    <table cellpadding="5">
        <tr>
            <td>旧密码</td>
            <td>
                <input type="text" name="current" style="width: 266px;" class="easyui-passwordbox"
                       data-options="required:true,prompt:'请输入当前密码',validType:{length: [6, 20]}">
            </td>
        </tr>
        <tr>
            <td>新密码</td>
            <td>
                <input type="text" name="password" style="width: 266px;" class="easyui-passwordbox"
                       data-options="required:true,prompt:'请输入新密码',validType:{length: [6, 20]}">
            </td>
        </tr>
    </table>
</form>
