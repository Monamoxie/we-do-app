<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="keywords" content=""/> 
        <meta name="description" content="" />
		<meta name="theme-color" content="#1b1b1b">
		<meta name="msapplication-navbutton-color" content="#1b1b1b">
		<meta name="apple-mobile-web-app-status-bar-style" content="#1b1b1b">
        <title>ISEJ Exchange</title>
        <link rel="shortcut icon" href="{{  asset('images/favicon.png') }}" type="image/x-icon"> 
        <script src="{{ asset('js/app.js') }}" defer></script> 
        <link rel="stylesheet" type="text/css" href="/css/app.css">
        <!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
			<script src="js/vendor/html5shiv.js"></script>
			<script src="vendor/respond.js"></script>
		<![endif]-->
    </head>
    <body>
        <div id="app"> </div>   
    </body>
</html>
