<div class="max-w-4xl mx-auto">
    {{-- header --}}
    <x-layouts.header>
        <div class="mr-auto mb-1">
            <h2 class="font-bold text-gray-800 text-xl">Filters & Labels</h2>
        </div>
    </x-layouts.header>

    <div class="mx-2 mt-5 flex flex-col">
        {{-- labels --}}
        <div class="text-gray-800 text-sm">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <x-button.header-tool class="p-0.5"><x-icon.chevron-right class="w-5 h-5"/></x-button.header-tool>
                    <h4 class="font-bold ml-2">Labels</h4>
                </div>
                <x-button.header-tool class="p-1"><x-icon.plus-small class="w-5 h-5"/></x-button.header-tool>
            </div>
            <hr class="my-1 ml-8">
            <ul class="ml-8" id="labels-root">
                <li class="py-2 px-3 border rounded-lg mt-1">Reading</li>
            </ul>
        </div>
        {{-- filters --}}
        <div></div>
    </div>
</div>
