<div>
    <div class="text-xs">
        <x-dropdown.button type="button" onclick="setDate('today', {{ $task->id }})" class="justify-between">
            <span class="flex items-center font-bold"><x-icon.calendar.today class="w-6 h-6 mr-2 text-green-700"/>Today</span>
            <span class="my-auto">{{ date('D') }}</span>
        </x-dropdown.button>
        <x-dropdown.button type="button" onclick="setDate('tomorrow', {{ $task->id }})" class="justify-between">
            <span class="flex items-center font-bold"><x-icon.sun class="w-5 h-5 mr-2 text-yellow-600"/>Tomorrow</span>
            <span class="my-auto">{{ Carbon\Carbon::tomorrow()->format('D') }}</span>
        </x-dropdown.button>
        <x-dropdown.button type="button" onclick="setDate('this_weekend', {{ $task->id }})" class="justify-between">
            <span class="flex items-center font-bold"><x-icon.sofa class="w-5 h-5 mr-2 text-blue-600"/>This Weekend</span>
            <span class="my-auto">Sat</span>
        </x-dropdown.button>
        <x-dropdown.button type="button" onclick="setDate('next_week', {{ $task->id }})" class="justify-between">
            <span class="flex items-center font-bold"><x-icon.calendar.arrow class="w-5 h-5 mr-2 text-purple-600"/>Next Week</span>
            <span class="my-auto">{{ getNextMondayDate('D d M') }}</span>
        </x-dropdown.button>
    </div>
    <hr class="my-2">
    <x-task.sections.datepicker/>
</div>
