<div class="max-w-4xl mx-auto">
    {{-- header --}}
    <x-layouts.header>
        <div class="mr-auto mb-1">
            <h2 class="font-bold text-gray-800 text-xl">Filters & Labels</h2>
        </div>
    </x-layouts.header>

    <div class="mx-2 mt-5 flex flex-col">
        {{-- labels --}}
        <div class="text-sm">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <x-button.header-tool class="p-0.5" onclick="toggleItems(this, 'labels-root')">@if($labelsIsClose === true) <x-icon.chevron-right class="w-5 h-5"/> @else <x-icon.chevron-below class="w-5 h-5"/> @endif</x-button.header-tool>
                    <h4 class="font-bold ml-2 text-gray-800">Labels</h4>
                </div>
                <x-button.header-tool class="p-0.5"><x-icon.plus-small class="w-5 h-5"/></x-button.header-tool>
            </div>
            <hr class="my-1 ml-8">
            <div class="ml-8 @if($labelsIsClose === true) hidden @endif" id="labels-root" data-is-close="@if($labelsIsClose === true){{ 'true' }}@else{{ 'false' }}@endif">
                <a href="#" class="flex justify-between items-center py-2 px-3 border rounded-lg mt-1 group" id="">
                    <div class="flex items-center">
                        <x-icon.tag class="w-6 h-6 mr-1"/>
                        <span class="text-gray-800">Reading</span>
                    </div>
                    {{-- tools section --}}
                    <div class="hidden md:flex invisible md:group-hover:visible">
                        <x-button.header-tool title="Add to favorites" class="p-1"><x-icon.heart class="w-5 h-5"/></x-button.header-tool>
                        <x-button.header-tool title="Edit label" class="p-1"><x-icon.pencil class="w-5 h-5"/></x-button.header-tool>
                        <x-button.header-tool title="Delete label" class="p-1"><x-icon.trash class="w-5 h-5"/></x-button.header-tool>
                    </div>
                </a>
            </div>
        </div>
        {{-- filters --}}
        <div></div>
    </div>
</div>
