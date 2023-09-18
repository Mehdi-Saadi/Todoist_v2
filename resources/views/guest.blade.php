<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>
    <link rel="icon" href="{{ asset('/assets/img/icon.png') }}">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans text-gray-900 bg-white">

<div class="container mx-auto pb-10">
    <div class="mx-5 md:mx-0">
        <div class="grid grid-cols-1 mt-6 mx-auto max-w-md lg:max-w-max">
            <div class="grid lg:grid-cols-7 grid-cols-1 md:mb-20 mb-10">
                <div class="text-red-550 font-bold text-2xl lg:col-start-2 lg:col-end-4">
                    <a href="#" class="flex items-center w-min">
                        <x-application-logo class="w-8 h-8 mr-1" />
                        <span class="hidden md:inline-block">{{ env('APP_NAME', 'Todotask') }}</span>
                    </a>
                </div>
            </div>
            @yield('content')
        </div>
    </div>
</div>

</body>
</html>
