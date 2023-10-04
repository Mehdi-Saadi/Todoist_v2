<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ env('APP_NAME', 'Todotask') }}</title>
    <link rel="icon" href="{{ asset('/assets/img/icon.png') }}">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans text-gray-500 bg-white h-screen select-none">

{{-- overlay --}}
<div id="overlay" onclick="closeSidebar()" class="w-full h-full z-30 fixed top-0 right-0 bg-stone-900 bg-opacity-50 hidden"></div>
<audio src="{{ asset('/assets/audio/bubble.mp3') }}" id="bubble"></audio>

{{-- topbar --}}
<x-layouts.topbar/>

{{-- main content --}}
<div class="h-full pt-11">
    {{-- sidebar --}}
    <x-layouts.sidebar/>

    {{-- main --}}
    <div class="w-full h-full pb-20 transition-all duration-300 @if($sidebarIsClose !== true) md:pl-[288px] @endif" id="main">
        {{ $slot }}
    </div>
</div>

</body>
</html>
