<div class="max-w-4xl mx-auto">
    {{-- header --}}
    <x-layouts.header>
        <div class="mr-auto">
            <h2 class="font-bold text-gray-800 text-xl">Inbox</h2>
        </div>
        <div class="ml-auto flex text-xs font-medium space-x-2">
            <x-button.header-tool class="py-1 px-2"><x-icon.adjustments-horizontal class="w-6 h-6 mr-1"/><span class="hidden lg:flex">View</span></x-button.header-tool>
            <x-button.header-tool class="py-1 px-2"><x-icon.chat-bubble-left class="w-6 h-6 mr-1"/><span class="hidden lg:flex">Comments</span></x-button.header-tool>

            <x-dropdown.main>
                {{-- toggle button --}}
                <x-button.header-tool data-dropdown-toggle="more-tools" title="More project actions" class="p-1"><x-icon.ellipsis-horizontal-outline class="w-6 h-6"/></x-button.header-tool>
                {{-- menu --}}
                <x-dropdown.menu class="w-60 xl:left-1/2 xl:-translate-x-1/2 right-0" id="more-tools">
                    <x-dropdown.button type="button" class="font-normal"><x-icon.circle-check class="w-6 h-6 mr-2"/>Show completed</x-dropdown.button>
                </x-dropdown.menu>
            </x-dropdown.main>
        </div>
{{--        <div class="flex items-center cursor-pointer relative">--}}
{{--            <input id="toggle" type="checkbox" class="sr-only absolute" />--}}
{{--            <div class="w-8 h-4 bg-gray-400 rounded-full shadow-inner"></div>--}}
{{--            <div class="toggle-dot absolute w-3 h-3 bg-white rounded-full shadow inset-y-0 left-0"></div>--}}
{{--        </div>--}}
    </x-layouts.header>

    {{-- show tasks --}}
    {{-- the 'grandParentTask' id is for stopping the loop of getting parents in 'doneCircleEffect.js' file --}}
    <div class="mx-2 mt-2 flex flex-col" id="grandParentTask">
        @livewire('layouts.task')
    </div>
    <div class="px-7 mt-5 pb-20">
        <button type="button" id="add-task-btn" onclick="showForm('add-task-btn', 'new-task-form')" class="w-full text-left group flex items-center px-3"><x-icon.plus-small class="w-5 h-5 mr-2 rounded-full text-red-550 group-hover:bg-red-550 group-hover:text-white"/><span class="group-hover:text-red-550">Add task</span></button>
        <x-task.new-form/>
    </div>
</div>
