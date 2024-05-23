<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title> Laravel 10 + Vue Js Router ACM </title>

        {{-- <meta name="csrf-token" content="{{ csrf_token() }}" /> --}}
        <link rel="shortcut icon" type="image/png" href="{{ asset('/icons/favicon.ico') }}">
        <link rel="shortcut icon" sizes="192x192" href="{{ asset('/icons/favicon.ico') }}">
        

    </head>
    <body class="antialiased">
        <div id="app" class="main-container"></div>
        
        @vite('resources/js/app.js')
    </body>
</html>
