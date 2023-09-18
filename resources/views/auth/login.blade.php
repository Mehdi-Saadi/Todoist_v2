@extends('guest')

@section('title', 'Log in to ' . env('APP_NAME', 'Todotask'))

@section('content')
    <div class="grid lg:grid-cols-7 grid-cols-1 items-center space-x-4">
        <div class="lg:col-start-2 lg:col-end-4">
            <h1 class="font-bold text-3xl">Log in</h1>
            {{-- google button --}}
            <div class="mt-10">
                <x-button.continue-with href="#"><x-icon.google class="w-6 h-6 mr-1"/>Continue with Google</x-button.continue-with>
            </div>
            <hr class="w-full mx-auto my-4">
            <form action="{{ route('login') }}" method="post" class="grid grid-cols-1 mb-5">
                @csrf
                {{-- email address --}}
                <div class="relative mb-4">
                    <x-input.label for="email">Email</x-input.label>
                    <input type="email" id="email" name="email" value="{{ old('email') }}" placeholder="Enter your email..." class="rounded-xl border-gray-200 focus:border-none focus:ring-gray-300 pb-1 pt-8 px-2 w-full h-16 @error('email') border-red-600 focus:ring-red-600 @enderror" autocomplete="off" autofocus>
                    @error('email') <x-input.error :message="$message"/> @enderror
                </div>
                {{-- password --}}
                <div class="relative">
                    <x-input.label for="password">Password</x-input.label>
                    <input type="password" id="password" name="password" placeholder="Enter your password..." class="rounded-xl border-gray-200 focus:border-none focus:ring-gray-300 pb-1 pt-8 px-2 w-full h-16 @error('password') border-red-600 focus:ring-red-600 @enderror" autocomplete="off">
                    @error('password') <x-input.error :message="$message"/> @enderror
                </div>

                <x-button.submit-register>Log in</x-button.submit-register>
            </form>
            <a href="{{ route('password.request') }}" class="text-gray-600 text-xs underline">Forgot your password?</a>
            <hr class="w-full mx-auto my-4">
            <p class="text-xs text-gray-600 text-center">Don't have an account? <a href="{{ route('register') }}" class="underline">Sign up</a></p>
        </div>
        {{-- image --}}
        <div class="lg:block hidden col-start-4 col-end-7">
            <img src="{{ asset('/assets/img/login-phooto.png') }}" class="w-full h-72 mt-3" alt="">
        </div>
    </div>
@endsection
