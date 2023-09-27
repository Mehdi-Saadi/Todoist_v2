<div {{ $attributes->merge(['class' => 'sticky z-10 top-11 pt-8 pb-2 px-10 w-full bg-white']) }}>
    <div class="flex justify-between">
        {{ $slot }}
    </div>
</div>
