<form style="padding: 10px">
    <table cellpadding="5">
        <tr>
            <td width="40">名称</td>
            <td>
                <input class="easyui-textbox" type="text" name="name" value="{{ $row->name }}" data-options="required:true,prompt:'请输入名称'"
                       style="width: 260px;">
            </td>
        </tr>
        <tr>
            <td>描述</td>
            <td>
                <input class="easyui-textbox" name="description" value="{{ $row->description }}" multiline="true" data-options="prompt:'请输入描述'"
                       style="width: 260px;height: 90px;">
            </td>
        </tr>
    </table>
</form>
