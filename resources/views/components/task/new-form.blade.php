 <form class="border border-gray-400 rounded-xl hidden" id="new-task-form">
    <div class="flex flex-col my-2 space-y-1">
        <input type="hidden" name="color" value="#808080" id="new-task-form-color">
        <input type="text" name="name" class="border-none focus:outline-none focus:ring-0 h-6 font-semibold placeholder:text-gray-400" placeholder="Task name" autocomplete="off">
        <input type="text" name="description" class="border-none focus:outline-none focus:ring-0 h-4 text-xs placeholder:text-gray-400" placeholder="Description" autocomplete="off">
        {{-- task actions --}}
        <div class="flex flex-row text-xs mx-3 space-x-2 pt-2 pb-1">
            <x-button.header-tool class="border px-1"><x-icon.calendar.dot class="w-5 h-5 mr-1"/>Due date</x-button.header-tool>
            <x-dropdown.main>
                {{-- toggle button --}}
                <x-button.header-tool data-dropdown-toggle="new-task-form-priority" class="border px-1 h-full"><x-icon.flag-outline class="w-5 h-5 mr-1"/>Priority</x-button.header-tool>
                {{-- menu --}}
                <x-dropdown.menu class="w-32" id="new-task-form-priority">
                    <x-dropdown.button type="button" onclick="selectPriority(1)" class="font-normal"><x-icon.flag-solid class="w-5 h-5 mr-1" style="color: #db4035"/>Priority 1</x-dropdown.button>
                    <x-dropdown.button type="button" onclick="selectPriority(2)" class="font-normal"><x-icon.flag-solid class="w-5 h-5 mr-1" style="color: #ff9933"/>Priority 2</x-dropdown.button>
                    <x-dropdown.button type="button" onclick="selectPriority(3)" class="font-normal"><x-icon.flag-solid class="w-5 h-5 mr-1" style="color: #4073ff"/>Priority 3</x-dropdown.button>
                    <x-dropdown.button type="button" onclick="selectPriority(4)" class="font-normal"><x-icon.flag-outline class="w-5 h-5 mr-1"/>Priority 4</x-dropdown.button>
                </x-dropdown.menu>
            </x-dropdown.main>
            <x-button.header-tool class="border px-1"><x-icon.tag class="w-4 h-4 mr-1"/>Labels</x-button.header-tool>
            {{-- more actions dropdown --}}
            <x-dropdown.main>
                {{-- toggle button --}}
                <x-button.header-tool data-dropdown-toggle="more-actions" class="border p-1"><x-icon.ellipsis-horizontal class="w-6 h-6"/></x-button.header-tool>
                {{-- menu --}}
                <x-dropdown.menu class="w-48" id="more-actions">
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
