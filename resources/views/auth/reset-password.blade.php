@extends('guest')

@section('title', 'Change your password')

@section('content')
    <div class="grid lg:grid-cols-7 grid-cols-1 items-center space-x-4">
        <div class="lg:col-start-2 lg:col-end-4">
            <h1 class="font-bold text-3xl">Password reset</h1>
            <p class="text-xs my-4">Please enter a new password for your {{ config('app.name', 'Laravel') }} account.</p>
            <p class="text-xs my-4">This will end all active sessions for your account and issue a new API token.</p>
            <hr class="w-full mx-auto my-4">
            <form action="{{ route('password.store') }}" method="post" class="grid grid-cols-1 mb-5">
                @csrf
                {{-- Password Reset Token --}}
                <input type="hidden" name="token" value="{{ $request->route('token') }}">

                {{-- email address --}}
                <div class="relative mb-4">
                    <x-input.label for="email">Email</x-input.label>
                    <input type="email" id="email" name="email" placeholder="Enter your email..." value="{{ old('email', $request->email) }}" class="rounded-xl border-gray-200 focus:border-none focus:ring-gray-300 pb-1 pt-8 px-2 w-full h-16 @error('email') border-red-600 focus:ring-red-600 @enderror" autocomplete="off">
                    @error('email') <x-input.error :message="$message"/> @enderror
                </div>
                {{-- password --}}
                <div class="relative mb-4">
                    <x-input.label for="password">Enter a new password</x-input.label>
                    <input type="password" id="password" name="password" class="rounded-xl border-gray-200 focus:border-none focus:ring-gray-300 pb-1 pt-8 px-2 w-full h-16 @error('password') border-red-600 focus:ring-red-600 @enderror" autocomplete="off" autofocus>
                    @error('password') <x-input.error :message="$message"/> @enderror
                </div>
                {{-- password confirmation --}}
                <div class="relative">
                    <x-input.label for="password_confirmation">Confirm your new password</x-input.label>
                    <input type="password" id="password_confirmation" name="password_confirmation" class="rounded-xl border-gray-200 focus:border-none focus:ring-gray-300 pb-1 pt-8 px-2 w-full h-16 @error('password') border-red-600 focus:ring-red-600 @enderror" autocomplete="off">
                </div>

                <p class="text-xs my-4">Your password must be at least 8 characters long. Avoid common words or patterns.</p>

                <x-button.submit-register>Reset my password</x-button.submit-register>
            </form>
            <hr class="w-full mx-auto my-4">
            <p class="text-xs text-gray-600 text-center">Need additional help? <a href="#" class="underline">Contact us</a></p>
        </div>
        {{-- image --}}
        <div class="lg:block hidden col-start-4 col-end-7">
            <img src="{{ asset('/assets/img/forgot-phooto.png') }}" class="w-full h-72 mt-3" alt="">
        </div>
    </div>
@endsection
