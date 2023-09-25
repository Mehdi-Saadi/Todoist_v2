<div {{ $attributes }}>
    <div class="text-xs">
        <x-dropdown.button type="button" @click="chooseDateShortcut('today')" class="justify-between">
            <span class="flex items-center font-bold"><x-icon.calendar.today class="w-6 h-6 mr-2 text-green-700"/>Today</span>
            <span class="my-auto">{{ date('D') }}</span>
        </x-dropdown.button>
        <x-dropdown.button type="button" @click="chooseDateShortcut('tomorrow')" class="justify-between">
            <span class="flex items-center font-bold"><x-icon.sun class="w-5 h-5 mr-2 text-yellow-600"/>Tomorrow</span>
            <span class="my-auto">{{ Carbon\Carbon::tomorrow()->format('D') }}</span>
        </x-dropdown.button>
        <x-dropdown.button type="button" @click="chooseDateShortcut('this_weekend')" class="justify-between">
            <span class="flex items-center font-bold"><x-icon.sofa class="w-5 h-5 mr-2 text-blue-600"/>This Weekend</span>
            <span class="my-auto">Sat</span>
        </x-dropdown.button>
        <x-dropdown.button type="button" @click="chooseDateShortcut('next_week')" class="justify-between">
            <span class="flex items-center font-bold"><x-icon.calendar.arrow class="w-5 h-5 mr-2 text-purple-600"/>Next Week</span>
            <span class="my-auto">{{ getNextMondayDate('D d M') }}</span>
        </x-dropdown.button>
        <x-dropdown.button type="button" @click="chooseDateShortcut('no_date')" class="items-center font-bold" x-show="showNoDate">
            <x-icon.circle-slash class="w-5 h-5 mr-2 text-gray-800"/>No Date
        </x-dropdown.button>
    </div>
    <hr class="my-2">
    <div class="px-3 py-2">
        {{-- header --}}
        <div class="flex justify-between items-center mb-2">
            <div class="text-sm font-bold text-gray-800">
                <span x-text="MONTH_NAMES[month]"></span>
                <span x-text="year"></span>
            </div>
            <div class="text-gray-500 space-x-1">
                <span class="transition ease-in-out duration-100 inline-flex rounded" :class="month === currentMonth && year === currentYear ? 'opacity-25' : 'hover:bg-gray-100 cursor-pointer'" @click="previousMonth()">
                    <x-icon.chevron-left class="w-5 h-5"/>
                </span>
                <span class="cursor-pointer transition ease-in-out duration-100 inline-flex hover:bg-gray-100 rounded" @click="nextMonth()">
                    <x-icon.chevron-right class="w-5 h-5"/>
                </span>
            </div>
        </div>
        {{-- days of week --}}
        <div class="grid grid-cols-7 text-center -mx-1.5 text-gray-500 mb-2 text-2xs">
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
        </div>
        {{-- date --}}
        <div class="grid grid-cols-7 text-center mb-3 -mx-1.5">
            <template x-for="blankDay in blankDays">
                <span class="w-6 h-6 mb-1"></span>
            </template>
            <template x-for="(date, dateIndex) in daysOfMonth" :key="dateIndex">
                <button type="button" x-text="date" @click="chooseDate(date)" class="w-6 h-6 mx-auto mb-1 flex justify-center items-center text-xs rounded-full transition ease-in-out duration-100" :disabled="isPassedDay(date)" :class="isPassedDay(date) ? 'opacity-25' : (isToday(date) ? (isSelected(date) ? 'text-white font-bold bg-red-550' : 'text-red-550 font-bold hover:bg-gray-100') : (isSelected(date) ? 'text-white font-bold bg-red-550' : 'text-gray-700 hover:bg-gray-100'))"></button>
            </template>
        </div>
    </div>
</div>
