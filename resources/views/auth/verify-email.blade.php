@extends('guest')

@section('title', 'Verify your Email')

@section('content')
    <div class="grid lg:grid-cols-7 grid-cols-1 items-center space-x-4">
        <div class="lg:col-start-2 lg:col-end-4">
            @if (session('status') == 'verification-link-sent')
                <div class="font-medium text-sm text-green-600 mb-4">A new verification link has been sent to the email address you provided during registration.</div>
            @endif
            <p class="text-sm text-gray-600">Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.</p>
            <hr class="w-full mx-auto my-4">
            <form action="{{ route('verification.send') }}" method="post" class="grid grid-cols-1 mb-5">
                @csrf
                <x-button.submit-register>Resend Verification Email</x-button.submit-register>
            </form>
        </div>
        {{-- image --}}
        <div class="lg:block hidden col-start-4 col-end-7">
            <img src="{{ asset('/assets/img/login-phooto.png') }}" class="w-full h-72 mt-3" alt="">
        </div>
    </div>
@endsection
