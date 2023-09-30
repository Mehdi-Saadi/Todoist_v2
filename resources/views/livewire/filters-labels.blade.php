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
                <x-button.header-tool class="p-0.5" onclick="showModal('new-label-modal')"><x-icon.plus-small class="w-5 h-5"/></x-button.header-tool>
            </div>
            <hr class="my-1 ml-8">
            <div class="ml-8 @if($labelsIsClose === true) hidden @endif" id="labels-root" data-is-close="@if($labelsIsClose === true){{ 'true' }}@else{{ 'false' }}@endif">
                @foreach(auth()->user()->labels->sortBy('order') as $label)
                    <a href="#" class="flex justify-between items-center py-2 px-3 border rounded-lg mt-1 group" id="{{ $label->id }}">
                        <div class="flex items-center">
                            <x-icon.tag class="w-6 h-6 mr-1" style="color: {{ $label->color }}"/>
                            <span class="text-gray-800">{{ $label->name }}</span>
                        </div>
                        {{-- tools section --}}
                        <div class="hidden md:flex invisible md:group-hover:visible">
                            <x-button.header-tool title="Add to favorites" class="p-1"><x-icon.heart class="w-5 h-5"/></x-button.header-tool>
                            <x-button.header-tool title="Edit label" class="p-1"><x-icon.pencil class="w-5 h-5"/></x-button.header-tool>
                            <x-button.header-tool title="Delete label" class="p-1" onclick="deleteLabel({{ $label->id }}, '{{ $label->name }}')"><x-icon.trash class="w-5 h-5"/></x-button.header-tool>
                        </div>
                    </a>
                @endforeach
            </div>
        </div>
        {{-- filters --}}
        <div></div>

        {{-- new label form --}}
        <div id="new-label-modal" class="fixed inset-0 items-center justify-center z-30 transition duration-300 hidden opacity-0">
            {{-- overlay --}}
            <div class="absolute inset-0 bg-stone-900 bg-opacity-50" onclick="hideAndResetLabelForm()"></div>
            {{-- modal --}}
            <div class="max-w-md w-full bg-white sm:mx-auto mx-6 md:mt-24 mt-32 mb-auto rounded-xl shadow-xl z-30">
                <div class="px-4 flex justify-between items-center py-2 border-b text-gray-800">
                    <h5 class="text-xl font-bold">Add label</h5>

                </div>
                <form class="pb-4 flex flex-col text-gray-800 space-y-4" id="new-label-form">
                    <input type="hidden" name="color" value="#808080" id="new-label-form-color">
                    <div class="space-y-1 px-4">
                        <label for="label-name" class="font-bold text-sm">Label name</label>
                        <input type="text" name="name" class="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full h-7 px-1" id="label-name" autocomplete="off">
                    </div>
                    <div class="space-y-1 px-4">
                        <span class="font-bold text-sm">Label color</span>
                        <x-dropdown.main>
                            <button type="button" class="rounded border border-gray-300 focus:border-gray-400 focus:ring-0 w-full h-7 px-2 flex items-center text-sm" data-dropdown-toggle="new-label-form-all-labels"><x-icon.dot class="w-4 h-4 mr-2" style="color: #808080"/>Charcoal</button>
                            <x-dropdown.menu class="w-full max-h-72 overflow-auto" id="new-label-form-all-labels">
                                @foreach(\App\Models\Color::all() as $color)
                                    <x-dropdown.button type="button" class="items-center text-sm" onclick="selectColor('{{ $color->code }}', '{{ $color->name }}', 'new-label-form-all-labels', 'new-label-form-color')"><x-icon.dot class="w-4 h-4 mr-2" style="color: {{ $color->code }}"/>{{ $color->name }}</x-dropdown.button>
                                @endforeach
                            </x-dropdown.menu>
                        </x-dropdown.main>
                    </div>
                    {{-- add to favorites --}}
                    <div></div>

                    <div class="text-xs font-semibold pt-4 border-t mt-auto flex">
                        <div class="px-4 ml-auto space-x-3">
                            <button type="button" onclick="hideAndResetLabelForm()" class="bg-zinc-100 hover:bg-zinc-200 w-16 h-8 text-center rounded-md">Cancel</button>
                            <button type="button" data-id="submit-btn" class="bg-red-550 enabled:hover:bg-red-850 w-16 h-8 text-center text-white rounded-md disabled:bg-opacity-50" disabled>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
</div>
