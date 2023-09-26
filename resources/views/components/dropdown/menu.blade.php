<div {{ $attributes->merge(['class' => 'hidden absolute z-10 mt-2 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 text-sm']) }}>
    <div class="p-1">
        {{ $slot }}
    </div>
</div>
