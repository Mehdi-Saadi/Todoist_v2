import {toastAlert} from "../helpers/alert";
import {ajaxRequest} from "../helpers/ajaxRequest";
import {taskResort, taskSort} from "./sort";
import {handleDropdowns} from "../helpers/dropdown";
import {selectPriority} from "./form/selectPriority";
import {DAY_NAMES} from "../helpers/dayAndMonthNames.js";

function getNextMondayDate() {
    let date = new Date();
    // check if today is Monday
    if(DAY_NAMES[date.getDay()] === 'Mon') {
        date.setDate(date.getDate() + 1);
    }

    while (true) {
        if(DAY_NAMES[date.getDay()] === 'Mon') {
            break;
        }
        date.setDate(date.getDate() + 1);
    }

    return `Mon ${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`;
}

function showSavedTask(parentRootId, task) {
    const today = new Date();
    const savedTask = document.createElement('div');
    savedTask.setAttribute('class', 'relative block px-1 py-2 border rounded-lg mt-1');
    savedTask.setAttribute('id', `${task.id}`);
    savedTask.innerHTML +=
        `<div class="flex flex-col group cursor-pointer">
            <div class="flex justify-between">
                <div class="flex">
                    <svg class="w-6 h-6 cursor-grab active:cursor-grabbing invisible group-hover:visible hidden md:block"><path fill="currentColor" d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z"></path></svg>
                    <svg class="w-6 h-6 mr-1 rounded-full" style="color: ${task.color}" id="task-circle-${task.id}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <span>${task.name}</span>
                </div>

                <div class="hidden md:flex invisible md:group-hover:visible cursor-auto">
                    <button type="button" class="hover:bg-zinc-100 rounded transition duration-300 flex items-center p-1" title="Edit task"><svg class="w-5 h-5"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"></path><path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"></path></g></svg></button>

                    <div class="relative">
                        <button type="button" class="hover:bg-zinc-100 rounded transition duration-300 flex items-center p-1" data-dropdown-toggle="task-due-date-${task.id}" title="Set due date"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm12 10a1 1 0 11-2 0 1 1 0 012 0zM7 8a.5.5 0 000 1h10a.5.5 0 000-1H7z" fill="currentColor"></path></svg></button>

                        <div class="hidden absolute z-10 mt-2 rounded-lg md:left-1/2 md:-translate-x-1/2 right-0 bg-white shadow-lg ring-1 ring-black ring-opacity-5 text-sm w-64" id="task-due-date-${task.id}">
                            <div class="p-1">
                                <div class="text-xs">
                                    <button class="w-full rounded text-left px-3 py-1 hover:bg-gray-100 flex justify-between" type="button" onclick="setDate('today', ${task.id})">
                                        <span class="flex items-center font-bold"><svg class="w-6 h-6 mr-2 text-green-700" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z" opacity=".1"></path><path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"></path><text font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" font-size="9" transform="translate(4 2)" font-weight="500"><tspan x="8" y="15" text-anchor="middle">18</tspan></text></g></svg>Today</span>
                                        <span class="my-auto">${DAY_NAMES[today.getDay()]}</span>
                                    </button>
                                    <button class="w-full rounded text-left px-3 py-1 hover:bg-gray-100 flex justify-between" type="button" onclick="setDate('tomorrow', ${task.id})">
                                        <span class="flex items-center font-bold"><svg class="w-5 h-5 mr-2 text-yellow-600" viewBox="0 0 28 28" aria-hidden="true" focusable="false"><g fill="currentColor" fill-rule="nonzero"><path d="M14 19a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" opacity=".1"></path><path d="M10.939 21.391a.5.5 0 0 1 .27.653L9.68 25.74a.5.5 0 1 1-.924-.383l1.53-3.695a.5.5 0 0 1 .654-.271zm6.776.27l1.53 3.696a.5.5 0 0 1-.923.383l-1.531-3.696a.5.5 0 0 1 .924-.382zM14 8a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm-7.391 9.061a.5.5 0 0 1-.27.654l-3.696 1.53a.5.5 0 0 1-.383-.923l3.696-1.531a.5.5 0 0 1 .653.27zm15.435-.27l3.696 1.53a.5.5 0 0 1-.383.924l-3.695-1.53a.5.5 0 1 1 .382-.924zM14 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2.643 8.755l3.695 1.53a.5.5 0 1 1-.382.924L2.26 9.68a.5.5 0 1 1 .383-.924zm23.367.27a.5.5 0 0 1-.27.653l-3.696 1.531a.5.5 0 0 1-.382-.924l3.695-1.53a.5.5 0 0 1 .653.27zM9.678 2.26l1.531 3.696a.5.5 0 0 1-.924.382l-1.53-3.695a.5.5 0 1 1 .923-.383zm9.297-.27a.5.5 0 0 1 .27.653l-1.53 3.695a.5.5 0 1 1-.924-.382l1.53-3.696a.5.5 0 0 1 .654-.27z"></path></g></svg>Tomorrow</span>
                                        <span class="my-auto">${DAY_NAMES[today.getDay() + 1]}</span>
                                    </button>
                                    <button class="w-full rounded text-left px-3 py-1 hover:bg-gray-100 flex justify-between" type="button" onclick="setDate('this_weekend', ${task.id})">
                                        <span class="flex items-center font-bold"><svg class="w-5 h-5 mr-2 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" aria-hidden="true" focusable="false"><path fill="currentColor" d="M19.3 6c2 0 3.7 1.6 3.7 3.7V11a2.5 2.5 0 013 2.4v5c0 1.4-1 2.5-2.4 2.5H21v.5a.5.5 0 01-1 0V21H8v.5a.5.5 0 01-1 0V21H4.5A2.5 2.5 0 012 18.5v-5a2.5 2.5 0 013-2.4V9.7C5 7.7 6.6 6 8.7 6h10.6zm4.2 6c-.8 0-1.4.6-1.5 1.4V17H6v-3.5a1.5 1.5 0 00-3-.1v5.1c0 .8.6 1.4 1.4 1.5h19.1c.8 0 1.4-.6 1.5-1.3v-5.2c0-.8-.7-1.5-1.5-1.5zm-4.2-5H8.7A2.7 2.7 0 006 9.5v2c.6.5 1 1.2 1 2V16h14v-2.5c0-.8.4-1.5 1-2V9.7C22 8.3 20.9 7 19.5 7h-.2z"></path></svg>This Weekend</span>
                                        <span class="my-auto">Sat</span>
                                    </button>
                                    <button class="w-full rounded text-left px-3 py-1 hover:bg-gray-100 flex justify-between" type="button" onclick="setDate('next_week', ${task.id})">
                                    <span class="flex items-center font-bold"><svg class="w-5 h-5 mr-2 text-purple-600" viewBox="0 0 28 28" aria-hidden="true" focusable="false"><g fill="currentColor" fill-rule="nonzero"><path d="M6 3.5h16A2.5 2.5 0 0 1 24.5 6v2.5h-21V6A2.5 2.5 0 0 1 6 3.5z" opacity=".1"></path><path d="M22 3a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16zm0 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-3.109 12.188l.007.01-.004-.005-.003-.005zM21.5 8a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zM19 16.52a.504.504 0 0 1-.023.131l-.015.04a.494.494 0 0 1-.05.093l-.014.018a.503.503 0 0 1-.033.04l-3.511 3.512a.5.5 0 0 1-.765-.638l.057-.07L17.292 17H9.5a.5.5 0 0 1-.492-.41L9 16.5a.5.5 0 0 1 .41-.492L9.5 16h7.792l-2.646-2.646a.5.5 0 0 1 .638-.765l.07.057 3.511 3.513.017.019.009.01-.027-.03.03.035.029.04a.52.52 0 0 1 .066.162l.008.052v.007l-.002-.026.005.072v.02z"></path></g></svg>Next Week</span>
                                    <span class="my-auto">${getNextMondayDate()}</span>
                                    </button>
                                </div>
                                <hr class="my-2">
                                <div x-data="datepicker()" x-init="[initDate(), initDatepicker()]">
                                    <div class="px-3 py-2">

                                        <div class="flex justify-between items-center mb-2">
                                            <div class="text-sm font-bold text-gray-800">
                                                <span x-text="MONTH_NAMES[month]"></span>
                                                <span x-text="year"></span>
                                            </div>
                                            <div class="text-gray-500 space-x-1">
                                                <span class="transition ease-in-out duration-100 inline-flex rounded" :class="[month === currentMonth && year === currentYear ? 'opacity-25' : 'hover:bg-gray-100 cursor-pointer']" @click="previousMonth()">
                                                    <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0z"></path><path fill="currentColor" fill-rule="nonzero" d="M10.707 12l3.647 3.646a.5.5 0 01-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 01.708.708L10.707 12z"></path></g></svg>
                                                </span>
                                                <span class="cursor-pointer transition ease-in-out duration-100 inline-flex hover:bg-gray-100 rounded" @click="nextMonth()">
                                                    <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 24V0h24v24z"></path><path fill="currentColor" fill-rule="nonzero" d="M13.293 12L9.646 8.354a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 12z"></path></g></svg>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-7 text-center -mx-1.5 text-gray-500 mb-2 text-2xs">
                                            <span>M</span>
                                            <span>T</span>
                                            <span>W</span>
                                            <span>T</span>
                                            <span>F</span>
                                            <span>S</span>
                                            <span>S</span>
                                        </div>

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
                            </div>
                        </div>
                    </div>

                    <button type="button" class="hover:bg-zinc-100 rounded transition duration-300 flex items-center p-1" title="Comment on task"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" data-svgs-path="sm1/comments.svg"><path fill="currentColor" fill-rule="nonzero" d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"></path></svg></button>

                    <div class="relative">
                        <button type="button" class="hover:bg-zinc-100 rounded transition duration-300 flex items-center p-1" data-dropdown-toggle="task-more-tools-${task.id}" title="More task actions"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg></button>

                        <div class="hidden absolute z-10 mt-2 rounded-lg md:left-1/2 md:-translate-x-1/2 right-0 bg-white shadow-lg ring-1 ring-black ring-opacity-5 text-sm w-60" id="task-more-tools-${task.id}">
                            <div class="p-1">
                                <button class="w-full rounded text-left px-3 py-1 hover:bg-gray-100 flex" type="button"><svg class="w-5 h-5 mr-2"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"></path><path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"></path></g></svg>Edit task</button>
                                <hr class="my-1">
                                <div class="flex flex-col mx-2">
                                    <span class="text-xs">Priority</span>
                                    <div class="flex space-x-2 mb-1 mt-2">
                                        <button type="button" class="hover:bg-zinc-100 rounded transition duration-300 flex items-center p-1 text-red-600 ${task.color === '#db4035' ? 'ring-gray-200 ring-1' : ''}" title="Priority 1" onclick="setPriority(1, ${task.id}, this)"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-name="priority-icon" data-priority="1"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.223 4.584A.5.5 0 004 5v14.5a.5.5 0 001 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0020 13V4.5a.5.5 0 00-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084z" fill="currentColor"></path></svg></button>
                                        <button type="button" class="hover:bg-zinc-100 rounded transition duration-300 flex items-center p-1 text-orange-400 ${task.color === '#ff9933' ? 'ring-gray-200 ring-1' : ''}" title="Priority 2" onclick="setPriority(2, ${task.id}, this)"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-name="priority-icon" data-priority="1"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.223 4.584A.5.5 0 004 5v14.5a.5.5 0 001 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0020 13V4.5a.5.5 0 00-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084z" fill="currentColor"></path></svg></button>
                                        <button type="button" class="hover:bg-zinc-100 rounded transition duration-300 flex items-center p-1 text-blue-600 ${task.color === '#4073ff' ? 'ring-gray-200 ring-1' : ''}" title="Priority 3" onclick="setPriority(3, ${task.id}, this)"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-name="priority-icon" data-priority="1"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.223 4.584A.5.5 0 004 5v14.5a.5.5 0 001 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0020 13V4.5a.5.5 0 00-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084z" fill="currentColor"></path></svg></button>
                                        <button type="button" class="hover:bg-zinc-100 rounded transition duration-300 flex items-center p-1 ${task.color === '#808080' ? 'ring-gray-200 ring-1' : ''}" title="Priority 4" onclick="setPriority(4, ${task.id}, this)"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-name="priority-icon" data-priority="4"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5a.5.5 0 01.223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.822 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0120 4.5V13a.5.5 0 01-.223.416c-1.09.727-2.518 1.084-4.277 1.084-1.113 0-1.92-.197-3.658-.776C10.204 13.178 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777V19.5a.5.5 0 01-1 0V5zm4.5 7c-1.367 0-2.535.216-3.5.654V5.277c.886-.515 2.05-.777 3.5-.777.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.367 0 2.535-.216 3.5-.654v7.377c-.886.515-2.05.777-3.5.777-.97 0-1.704-.178-3.342-.724C10.421 12.196 9.613 12 8.5 12z" fill="currentColor"></path></svg></button>
                                    </div>
                                </div>
                                <hr class="my-1">
                                <button class="w-full rounded text-left px-3 py-1 hover:bg-gray-100 flex" type="button"><svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.354 12.95l-.708-.707L5.88 14.01a3 3 0 104.242 4.243l3.536-3.536a3 3 0 000-4.242l-.707.707a2 2 0 010 2.828l-3.536 3.536a2 2 0 11-2.828-2.829l1.768-1.767z" fill="currentColor"></path><path d="M15.778 11.182l.707.707 1.768-1.768A3 3 0 1014.01 5.88l-3.535 3.535a3 3 0 000 4.243l.707-.707a2 2 0 010-2.829l3.535-3.535a2 2 0 112.829 2.828l-1.768 1.768z" fill="currentColor"></path></svg>Copy link to task</button>
                                <hr class="my-1">
                                <button class="w-full rounded text-left px-3 py-1 hover:bg-gray-100 flex text-red-600" type="submit" onclick="deleteTask(${task.id}, '${task.name}')"><svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><rect width="14" height="1" x="5" y="6" fill="currentColor" rx="0.5"></rect><path fill="currentColor" d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"></path><path stroke="currentColor" d="M17.5 6.5h-11V18A1.5 1.5 0 008 19.5h8a1.5 1.5 0 001.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0014 3.5h-4A1.5 1.5 0 008.5 5v1.5z"></path></g></svg>Delete task</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:mx-13 mx-7 text-xs">
                <div>${task.description}</div>
                <div>
                    <span></span>
                    <span class="flex items-center" id="task-deadline-${task.id}"></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="flex flex-col nested-sortable mt-2 mx-1 md:mx-5"></div>`;
    document.getElementById(parentRootId).appendChild(savedTask);
}

function addTask(taskFormId) {
    document.getElementById(taskFormId).addEventListener('submit', (e) => {
        e.preventDefault();
        let target = e.target;
        const submitBtn = target.querySelector('button[data-id="submit-btn"]');
        const colorInput = target.querySelector('input[name="color"]');
        const nameInput = target.querySelector('input[name="name"]');
        const descriptionInput = target.querySelector('input[name="description"]');
        // check that inputs must not empty
        if (nameInput.value === '') {
            return
        }

        let data = {
            color: colorInput.value,
            name: nameInput.value,
            description: descriptionInput.value,
        };

        ajaxRequest('post', "/task/create", data, function (task) {
            if(task.description === null) task.description = '';

            showSavedTask('nestedRoot', task);

            // if(data.parent_id !== '0') {
            //     // show in modal page
            //     showSavedTask('#task-detail-'+data.parent_id+'>div.nested-sortable', task);
            //     // add new task in its parent section
            //     showSavedTask('[id="'+data.parent_id+'"]>div.nested-sortable', task);
            //
            // } else {
            //     // show in main page
            //     showSavedTask('#nestedRoot', task);
            // }

            // in '/app/today', tasks must not be sortable
            if (! window.location.href.includes('today')) {
                taskResort();
            }
            handleDropdowns();
            toastAlert('', 'Task created');
        });

        // set inputs to default value
        selectPriority(4);
        nameInput.value = '';
        descriptionInput.value = '';

        nameInput.focus();
        submitBtn.setAttribute('disabled', 'true');
        submitBtn.setAttribute('type', 'button');
    });
}
document.addEventListener('DOMContentLoaded', () => {addTask('new-task-form')});
document.addEventListener('livewire:navigated', () => {addTask('new-task-form')});
