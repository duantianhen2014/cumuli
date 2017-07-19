<!doctype html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Cumuli系统</title>

    <link rel="stylesheet" href="{{ elixir('css/app.css') }}" type="text/css"/>

</head>
<body class="easyui-layout" fit="true">

<div data-options="region:'west',split:true,title:'Loading...',width:240">
    <div class="easyui-accordion" data-options="fit:true,border:false"></div>
</div>

<div data-options="region:'center'">
    <div class="easyui-tabs" data-options="tabPosition:'bottom',fit:true,border:false,plain:false">
        <div title="欢迎页面" href="/dashboard/welcome" data-options="cache:false,iconCls:'fa fa-home'"></div>
    </div>
</div>

<div data-options="region:'south',split:false">
    <div align="center">&copy; 2017 Powerd by wangdong</div>
</div>

<script type="text/javascript" src="{{ elixir('js/app.js') }}"></script>
</body>
</html>
