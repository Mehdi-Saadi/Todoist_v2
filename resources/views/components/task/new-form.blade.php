<form class="border border-gray-400 rounded-xl hidden" id="new-task-form">
    <div class="flex flex-col my-2 space-y-1">
        <input type="hidden" name="color" value="#808080" id="new-task-form-color">
        <input type="hidden" name="deadline_date" value="" id="new-task-form-deadline-date">
        <input type="text" name="name" class="border-none focus:outline-none focus:ring-0 h-6 font-semibold placeholder:text-gray-400" placeholder="Task name" autocomplete="off">
        <input type="text" name="description" class="border-none focus:outline-none focus:ring-0 h-4 text-xs placeholder:text-gray-400" placeholder="Description" autocomplete="off">
        {{-- task actions --}}
        <div class="flex flex-row text-xs mx-3 space-x-2 pt-2 pb-1">
            {{-- due date dropdown --}}
            <x-dropdown.main>
                {{-- toggle button --}}
                <x-button.header-tool data-dropdown-toggle="new-task-form-due-date" class="border px-1 h-full"><x-icon.calendar.dot class="w-5 h-5 mr-1"/>Due date</x-button.header-tool>
                {{-- menu --}}
                <x-dropdown.menu class="w-64 lg:left-1/2 lg:-translate-x-1/2" id="new-task-form-due-date">
                    <x-task.sections.datepicker x-data="datepickerSelect()" x-init="[initDate(), initDatepicker()]"/>
                </x-dropdown.menu>
            </x-dropdown.main>
            {{-- priority dropdown --}}
            <x-dropdown.main>
                {{-- toggle button --}}
                <x-button.header-tool data-dropdown-toggle="new-task-form-priority" class="border px-1 h-full"><x-icon.flag-outline class="w-5 h-5 mr-1"/>Priority</x-button.header-tool>
                {{-- menu --}}
                <x-dropdown.menu class="w-32 left-1/2 -translate-x-1/2" id="new-task-form-priority">
                    <x-dropdown.button type="button" onclick="selectPriority(1)" class="font-normal"><x-icon.flag-solid class="w-5 h-5 mr-1" style="color: #db4035"/>Priority 1</x-dropdown.button>
                    <x-dropdown.button type="button" onclick="selectPriority(2)" class="font-normal"><x-icon.flag-solid class="w-5 h-5 mr-1" style="color: #ff9933"/>Priority 2</x-dropdown.button>
                    <x-dropdown.button type="button" onclick="selectPriority(3)" class="font-normal"><x-icon.flag-solid class="w-5 h-5 mr-1" style="color: #4073ff"/>Priority 3</x-dropdown.button>
                    <x-dropdown.button type="button" onclick="selectPriority(4)" class="font-normal"><x-icon.flag-outline class="w-5 h-5 mr-1"/>Priority 4</x-dropdown.button>
                </x-dropdown.menu>
            </x-dropdown.main>
            {{-- label dropdown --}}
            <x-dropdown.main>
                {{-- toggle button --}}
                <x-button.header-tool data-dropdown-toggle="new-task-form-label" class="border px-1 h-full"><x-icon.tag-outline class="w-4 h-4 mr-1"/>Labels</x-button.header-tool>
                {{-- menu --}}
                <x-dropdown.menu class="-translate-x-[10.5rem] sm:w-96 w-72 max-h-40 overflow-y-auto" id="new-task-form-label">
                    @foreach(auth()->user()->labels->sortBy('order') as $label)
                        <div class="grid grid-cols-9 rounded text-sm hover:bg-gray-100">
                            <button type="button" onclick="" class="col-span-8 text-left px-3 py-1 flex">
                                <x-icon.tag class="w-6 h-6 mr-1" style="color: {{ $label->color }}"/>
                                <span class="text-gray-800 whitespace-nowrap overflow-hidden sm:w-64 w-40">{{ $label->name }}</span>
                            </button>
                            <div class="col-span-1 flex items-center px-3 py-1">
                                <input type="checkbox" class="rounded cursor-pointer focus:ring-transparent" onclick="selectLabel({{ $label->id }})">
                            </div>
                        </div>
                    @endforeach
                </x-dropdown.menu>
            </x-dropdown.main>
            {{-- more actions dropdown --}}
            <x-dropdown.main>
                {{-- toggle button --}}
                <x-button.header-tool data-dropdown-toggle="new-task-form-more-actions" class="border p-1"><x-icon.ellipsis-horizontal class="w-6 h-6"/></x-button.header-tool>
                {{-- menu --}}
                <x-dropdown.menu class="w-48 sm:left-1/2 sm:-translate-x-1/2 right-0" id="new-task-form-more-actions">
                    <x-dropdown.button type="button" class="font-normal"><x-icon.clock class="w-5 h-5 mr-1"/>Reminders</x-dropdown.button>
                    <x-dropdown.button type="button" class="font-normal"><x-icon.location class="w-4 h-4 mr-1"/>Location</x-dropdown.button>
                </x-dropdown.menu>
            </x-dropdown.main>
        </div>
    </div>
    <div class="flex justify-between border-t p-2 text-xs font-semibold">
        <div></div>
        <div class="space-x-1">
            <button type="button" onclick="hideForm('add-task-btn', 'new-task-form')" class="bg-zinc-100 hover:bg-zinc-200 px-3 py-2 rounded-md">Cancel</button>
            <button type="button" data-id="submit-btn" class="bg-red-550 enabled:hover:bg-red-850 px-3 py-2 text-white rounded-md disabled:bg-opacity-50" disabled>Add task</button>
        </div>
    </div>
</form>
