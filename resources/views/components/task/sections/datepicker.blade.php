<div x-data="datepicker()" x-init="[initDate(), initDatepicker()]">
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
                <button type="button" x-text="date" @click="getDateValue(date)" class="w-6 h-6 mx-auto mb-1 flex justify-center items-center text-xs rounded-full" :disabled="isPassedDay(date)" :class="[isPassedDay(date) ? 'opacity-25' : 'transition ease-in-out duration-100 hover:bg-gray-100', isToday(date) ? 'text-red-550 font-bold' : 'text-gray-700']"></button>
            </template>
        </div>
    </div>
</div>
