<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Cumuli系统') }}</title>
    <link rel="stylesheet" href="{{ elixir('css/app.css') }}" type="text/css"/>
    <link rel="stylesheet" href="{{ elixir('css/themes/black.css') }}" type="text/css" theme="black" disabled/>
    <link rel="stylesheet" href="{{ elixir('css/themes/bootstrap.css') }}" type="text/css" theme="bootstrap" disabled/>
    <link rel="stylesheet" href="{{ elixir('css/themes/default.css') }}" type="text/css" theme="default" disabled/>
    <link rel="stylesheet" href="{{ elixir('css/themes/gray.css') }}" type="text/css" theme="gray" disabled/>
    <link rel="stylesheet" href="{{ elixir('css/themes/material.css') }}" type="text/css" theme="material" disabled/>
    <link rel="stylesheet" href="{{ elixir('css/themes/metro.css') }}" type="text/css" theme="metro"/>
</head>
<body class="easyui-layout" fit="true">

{{--加载效果--}}
<div class="panel-loading" style="position:absolute;width:100%;height:100%;background-color:white;padding-top:7px;">
    Loading...
</div>

@yield('content')

{{--底部版权信息区域--}}
<div data-options="region:'south',split:false,border:true">
    <div align="center">&copy; 2017 {{ config('app.name') }}</div>
</div>

<div class="easyui-dialog cumuli-dialog" data-options="closed:true,title:'Loading...'"></div>

<script type="text/javascript" src="{{ elixir('js/app.js') }}"></script>
<script type="text/javascript" src="{{ elixir('js/locale/'. app()->getLocale() .'.js') }}"></script>
@yield('script')
</body>
</html>
