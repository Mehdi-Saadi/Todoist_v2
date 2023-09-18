@extends('guest')

@section('title', 'Can\'t sign in? Forgot your password?')

@section('content')
    <div class="grid lg:grid-cols-7 grid-cols-1 items-center space-x-4">
        <div class="lg:col-start-2 lg:col-end-4">
            <h1 class="font-bold text-3xl">Forgot your password?</h1>
            <p class="text-xs my-4">To reset your password, please enter the email address of your {{ config('app.name', 'Laravel') }} account.</p>
            @if (session('status'))
                <div class="font-medium text-sm text-green-600 mb-4">
                    {{ session('status') }}
                </div>
            @endif
            <form action="{{ route('password.email') }}" method="post" class="grid grid-cols-1 mb-5">
                @csrf
                {{-- email address --}}
                <div class="relative mb-4">
                    <x-input.label for="email">Email</x-input.label>
                    <input type="email" id="email" name="email" placeholder="Enter your email..." class="rounded-xl border-gray-200 focus:border-none focus:ring-gray-300 pb-1 pt-8 px-2 w-full h-16 @error('email') border-red-600 focus:ring-red-600 @enderror" autocomplete="off" autofocus>
                    @error('email') <x-input.error :message="$message"/> @enderror
                </div>

                <x-button.submit-register>Reset my password</x-button.submit-register>
            </form>
            <hr class="w-full mx-auto my-4">
            <a href="{{ route('login') }}" class="underline text-xs text-gray-600 flex justify-center">Go to login</a>
        </div>
        {{-- image --}}
        <div class="lg:block hidden col-start-4 col-end-7">
            <img src="{{ asset('/assets/img/forgot-phooto.png') }}" class="w-full h-80 mt-3" alt="">
        </div>
    </div>
@endsection
