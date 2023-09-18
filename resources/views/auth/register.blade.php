@extends('guest')

@section('title', 'Sign up for a free ' . env('APP_NAME', 'Todotask') . ' account')

@section('content')
    <div class="grid lg:grid-cols-7 grid-cols-1 items-center space-x-4">
        <div class="lg:col-start-2 lg:col-end-4">
            <h1 class="font-bold text-3xl">Sign up</h1>
            {{-- google button --}}
            <div class="mt-10">
                <x-button.continue-with href="#"><x-icon.google class="w-6 h-6 mr-1"/>Continue with Google</x-button.continue-with>
            </div>
            <hr class="w-full mx-auto my-4">
            <form action="{{ route('register') }}" method="post" class="grid grid-cols-1 mb-5 space-y-4">
                @csrf
                {{-- name --}}
                <div class="relative">
                    <x-input.label for="name">Name</x-input.label>
                    <input type="text" id="name" name="name" value="{{ old('name') }}" placeholder="Enter your name..." class="rounded-xl border-gray-200 focus:border-none focus:ring-gray-300 pb-1 pt-8 px-2 w-full h-16 @error('name') border-red-600 focus:ring-red-600 @enderror" autocomplete="off" autofocus>
                    @error('name') <x-input.error :message="$message"/> @enderror
                </div>
                {{-- email address --}}
                <div class="relative">
                    <x-input.label for="email">Email</x-input.label>
                    <input type="email" id="email" name="email" value="{{ old('email') }}" placeholder="Enter your email..." class="rounded-xl border-gray-200 focus:border-none focus:ring-gray-300 pb-1 pt-8 px-2 w-full h-16 @error('email') border-red-600 focus:ring-red-600 @enderror" autocomplete="off">
                    @error('email') <x-input.error :message="$message"/> @enderror
                </div>
                {{-- password --}}
                <div class="relative">
                    <x-input.label for="password">Password</x-input.label>
                    <input type="password" id="password" name="password" placeholder="Enter your password..." class="rounded-xl border-gray-200 focus:border-none focus:ring-gray-300 pb-1 pt-8 px-2 w-full h-16 @error('password') border-red-600 focus:ring-red-600 @enderror" autocomplete="off">
                    @error('password') <x-input.error :message="$message"/> @enderror
                </div>

                <x-button.submit-register>Sign up with Email</x-button.submit-register>
            </form>
            <hr class="w-full mx-auto my-4">
            <p class="text-xs text-gray-600 text-center">Already signed up? <a href="{{ route('login') }}" class="underline">Go to login</a></p>
        </div>
        {{-- image --}}
        <div class="lg:block hidden col-start-4 col-end-7">
            <img src="{{ asset('/assets/img/signup.png') }}" class="w-full h-full mt-3" alt="">
        </div>
    </div>
@endsection
