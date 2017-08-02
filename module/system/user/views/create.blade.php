<form style="padding: 10px">
    <table cellpadding="5">
        <tr>
            <td width="40">名称</td>
            <td>
                <input type="text" name="name" style="width: 266px;" class="easyui-textbox"
                       data-options="required:true,prompt:'请输入名称',validType:{length: [2, 20]}">
            </td>
        </tr>
        <tr>
            <td>邮箱</td>
            <td>
                <input type="text" name="email" style="width: 266px;" class="easyui-textbox"
                       data-options="required:true,prompt:'请输入邮箱',validType:{email: true, remote: ['/system/user/exists_email?reverse=true','email']}">
            </td>
        </tr>
        <tr>
            <td>密码</td>
            <td>
                <input type="text" name="password" style="width: 266px;" class="easyui-passwordbox"
                       data-options="required:true,prompt:'请输入密码',validType:{length: [6, 20]}">
            </td>
        </tr>
        <tr>
            <td>角色</td>
            <td>
                <select name="role[]" class="easyui-combogrid" style="width:266px;" data-options="
                    prompt:'请选择角色',
                    panelWidth: 430,
                    multiple: true,
                    idField: 'id',
                    textField: 'name',
                    url: '/system/role',
                    value: [],
                    editable: false,
                    method: 'post',
                    columns: [[
                        {field:'id',title:'ID',width:60},
                        {field:'name',title:'角色',width:100},
                        {field:'description',title:'描述',width:200}
                    ]],
                    fitColumns: true,
                    labelPosition: 'top',
                    pagination: true,
                    pageSize: 20,
                    pageList: [20,30,50]
                ">
                </select>
            </td>
        </tr>
    </table>
</form>
