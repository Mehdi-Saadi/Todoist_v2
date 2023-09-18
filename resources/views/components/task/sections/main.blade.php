<div class="flex flex-col group cursor-pointer">
    <div class="flex justify-between">
        <div class="flex">
            <x-icon.handle class="w-6 h-6 cursor-grab active:cursor-grabbing invisible group-hover:visible hidden md:block"/>
            {{-- circle --}}
            {{ $slot }}
            {{-- name --}}
            <span>{{ $task->name }}</span>
        </div>
        {{-- tools section --}}
        <div class="hidden md:flex invisible md:group-hover:visible cursor-auto">
            <x-button.header-tool title="Edit task" class="p-1"><x-icon.pencil class="w-5 h-5"/></x-button.header-tool>
            {{-- due date section --}}
            <x-dropdown.main>
                {{-- toggle button --}}
                <x-button.header-tool data-dropdown-toggle="task-due-date-{{ $task->id }}" title="Set due date" class="p-1"><x-icon.calendar.dot class="w-6 h-6"/></x-button.header-tool>
                {{-- menu --}}
                <x-dropdown.menu class="w-64" id="task-due-date-{{ $task->id }}">
                    <x-task.sections.due-date-menu :$task/>
                </x-dropdown.menu>
            </x-dropdown.main>

            <x-button.header-tool title="Comment on task" class="p-1"><x-icon.chat-bubble-left class="w-6 h-6"/></x-button.header-tool>
            {{-- more actions --}}
            <x-dropdown.main>
                {{-- toggle button --}}
                <x-button.header-tool data-dropdown-toggle="task-more-tools-{{ $task->id }}" title="More task actions" class="p-1"><x-icon.ellipsis-horizontal class="w-6 h-6"/></x-button.header-tool>
                {{-- menu --}}
                <x-dropdown.menu class="w-60" id="task-more-tools-{{ $task->id }}">
                    <x-dropdown.button type="button"><x-icon.pencil class="w-5 h-5 mr-2"/>Edit task</x-dropdown.button>
                    <hr class="my-1">
                    <div class="flex flex-col mx-2">
                        <span class="text-xs">Due date</span>
                        <div class="flex space-x-3 mb-1 mt-2">
                            <x-button.header-tool onclick="setDate('today', {{ $task->id }})" title="Today" class="p-0.5 text-green-700"><x-icon.calendar.today class="w-7 h-7"/></x-button.header-tool>
                            <x-button.header-tool onclick="setDate('tomorrow', {{ $task->id }})" title="Tomorrow" class="p-0.5 text-yellow-600"><x-icon.sun class="w-6 h-6"/></x-button.header-tool>
                            <x-button.header-tool onclick="setDate('this_weekend', {{ $task->id }})" title="This Weekend" class="p-0.5 text-blue-600"><x-icon.sofa class="w-7 h-7"/></x-button.header-tool>
                            <x-button.header-tool onclick="setDate('next_week', {{ $task->id }})" title="Next Week" class="p-0.5 text-purple-600"><x-icon.calendar.arrow class="w-6 h-6"/></x-button.header-tool>
                            <x-button.header-tool title="More" class="p-0.5"><x-icon.ellipsis-horizontal-outline class="w-6 h-6"/></x-button.header-tool>
                        </div>
                        <span class="text-xs">Priority</span>
                        <div class="flex space-x-2 mb-1 mt-2">
                            <x-button.header-tool title="Priority 1" onclick="setPriority(1, {{ $task->id }}, this)" class="p-1 text-red-600 {{ $task->color === '#db4035' ? 'ring-1 ring-gray-200' : '' }}"><x-icon.flag-solid class="w-6 h-6"/></x-button.header-tool>
                            <x-button.header-tool title="Priority 2" onclick="setPriority(2, {{ $task->id }}, this)" class="p-1 text-orange-400 {{ $task->color === '#ff9933' ? 'ring-1 ring-gray-200' : '' }}"><x-icon.flag-solid class="w-6 h-6"/></x-button.header-tool>
                            <x-button.header-tool title="Priority 3" onclick="setPriority(3, {{ $task->id }}, this)" class="p-1 text-blue-600 {{ $task->color === '#4073ff' ? 'ring-1 ring-gray-200' : '' }}"><x-icon.flag-solid class="w-6 h-6"/></x-button.header-tool>
                            <x-button.header-tool title="Priority 4" onclick="setPriority(4, {{ $task->id }}, this)" class="p-1 {{ $task->color === '#808080' ? 'ring-1 ring-gray-200' : '' }}"><x-icon.flag-outline class="w-6 h-6"/></x-button.header-tool>
                        </div>
                    </div>
                    <hr class="my-1">
                    <x-dropdown.button type="button"><x-icon.link class="w-6 h-6 mr-2"/>Copy link to task</x-dropdown.button>
                    <hr class="my-1">
                    <x-dropdown.button type="submit" onclick="deleteTask({{ $task->id }}, '{{ $task->name }}')" class="text-red-600"><x-icon.trash class="w-6 h-6 mr-2"/>Delete task</x-dropdown.button>
                </x-dropdown.menu>
            </x-dropdown.main>
        </div>
    </div>
    {{-- info --}}
    <div class="md:mx-13 mx-7 text-xs">
        <div>{{ $task->description }}</div>
        <div>
            <span></span>
            {!! controlDate($task) !!}
            <span></span>
            <span>{{ $task->label }}</span>
        </div>
    </div>
</div>
