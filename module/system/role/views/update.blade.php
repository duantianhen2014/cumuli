<form>
    <table>
        @foreach($row as $name=>$value)
            <tr>
                <td>{{ $name }}</td>
                <td>{{ $value }}</td>
            </tr>
        @endforeach
    </table>
</form>
