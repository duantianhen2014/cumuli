<form style="padding: 10px">
    <table cellpadding="5">
        <tr>
            <td width="40">名称</td>
            <td>
                <input type="text" name="name" value="{{ $row->name }}" style="width: 266px;" class="easyui-textbox"
                       data-options="required:true">
            </td>
        </tr>
        <tr>
            <td>描述</td>
            <td>
                <textarea name="description" style="width: 260px;height: 90px;">{{ $row->description }}</textarea>
            </td>
        </tr>
    </table>
</form>
