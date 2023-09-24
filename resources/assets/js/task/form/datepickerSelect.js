import {DAY_NAMES, FULL_DAY_NAMES} from "../../helpers/dayAndMonthNames.js";
import {calendar_dot_5} from "../helpers/datepicker/calendarDotSVG.js";
import {nextMonth, previousMonth} from "../helpers/datepicker/navigate.js";
import {initDatepicker} from "../helpers/datepicker/initDatepicker.js";
import {isPassedDay, isSelected, isToday} from "../helpers/datepicker/displayConditions.js";

export function datepickerSelect() {
    return {
        currentMonth: null,
        currentYear: null,
        timestampOfTodayInSec: null,
        month: null,
        year: null,
        daysOfMonth: [],
        blankDays: [],
        deadlineDate: null,
        showNoDate: false,

        initDate() {
            const today = new Date();
            this.currentMonth = today.getMonth();
            this.currentYear = today.getFullYear();
            this.timestampOfTodayInSec = new Date(this.currentYear, this.currentMonth, today.getDate()) / 1000;
            this.month = this.currentMonth;
            this.year = this.currentYear;
        },

        isToday,

        isPassedDay,

        isSelected,

        chooseDate(date) {
            if (this.isPassedDay(date)) {return;}

            const dueDateBtn = document.querySelector('button[data-dropdown-toggle="new-task-form-due-date"]');
            const deadlineInput = document.getElementById('new-task-form-deadline-date');
            let today = this.timestampOfTodayInSec,
                tomorrow = today + 86400,
                thirdDay = tomorrow + 86400,
                fourthDay = thirdDay + 86400,
                fifthDay = fourthDay + 86400,
                sixthDay = fifthDay + 86400,
                seventhDay = sixthDay + 86400,
                eighthDay = seventhDay + 86400,
                day,
                color;

            // convert selected date to timestamp
            date = new Date(this.year, this.month, date) / 1000;

            switch (date) {
                case today:
                    date = new Date(today * 1000);
                    day = 'Today';
                    color = 'text-green-700';
                    break;
                case tomorrow:
                    date = new Date(tomorrow * 1000);
                    day = 'Tomorrow';
                    color = 'text-yellow-600';
                    break;
                case thirdDay:
                    date = new Date(thirdDay * 1000);
                    day = FULL_DAY_NAMES[date.getDay()];
                    color = 'text-purple-600';
                    break;
                case fourthDay:
                    date = new Date(fourthDay * 1000);
                    day = FULL_DAY_NAMES[date.getDay()];
                    color = 'text-purple-600';
                    break;
                case fifthDay:
                    date = new Date(fifthDay * 1000);
                    day = FULL_DAY_NAMES[date.getDay()];
                    color = 'text-purple-600';
                    break;
                case sixthDay:
                    date = new Date(sixthDay * 1000);
                    day = FULL_DAY_NAMES[date.getDay()];
                    color = 'text-purple-600';
                    break;
                case seventhDay:
                    date = new Date(seventhDay * 1000);
                    day = FULL_DAY_NAMES[date.getDay()];
                    color = 'text-purple-600';
                    break;
                case eighthDay:
                    date = new Date(eighthDay * 1000);
                    day = FULL_DAY_NAMES[date.getDay()];
                    color = 'text-purple-600';
                    break;
                default:
                    date = new Date(date * 1000);
                    day = `${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`;
                    color = '';
            }

            this.resetAndSetData(deadlineInput, dueDateBtn, date, color, day);
        },

        chooseDateShortcut(date) {
            const dueDateBtn = document.querySelector('button[data-dropdown-toggle="new-task-form-due-date"]');
            const deadlineInput = document.getElementById('new-task-form-deadline-date');
            let day,
                color;

            switch (date) {
                case 'today':
                    day = 'Today';
                    color = 'text-green-700';
                    date = new Date();
                    break;
                case 'tomorrow':
                    date = new Date();
                    date.setDate(date.getDate() + 1);

                    day = 'Tomorrow';
                    color = 'text-yellow-600';
                    break;
                case 'this_weekend':
                    date = new Date();

                    while (true) {
                        if(DAY_NAMES[date.getDay()] === 'Sat') {
                            break;
                        }
                        date.setDate(date.getDate() + 1);
                    }

                    day = 'Saturday';
                    color = 'text-purple-600';
                    break;
                case 'next_week':
                    date = new Date();

                    if(DAY_NAMES[date.getDay()] === 'Mon') {
                        date.setDate(date.getDate() + 1);
                    }

                    while (true) {
                        if(DAY_NAMES[date.getDay()] === 'Mon') {
                            break;
                        }
                        date.setDate(date.getDate() + 1);
                    }

                    day = 'Monday';
                    color = 'text-purple-600';
                    break;
                default:
                    date = '';
                    day = 'Due date';
                    color = '';
            }

            this.resetAndSetData(deadlineInput, dueDateBtn, date, color, day);
        },

        resetAndSetData(deadlineInput, dueDateBtn, date, color, day) {
            // reset deadline input
            dueDateBtn.removeAttribute('class');
            dueDateBtn.setAttribute('class', `hover:bg-zinc-100 rounded transition duration-300 flex items-center border px-1 h-full ${color}`);
            dueDateBtn.innerHTML = `${calendar_dot_5 + day}`;

            if (date !== '') {
                date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                // convert new deadlineDate string to Date object
                this.deadlineDate = new Date(date);
                // open calendar on deadline month
                this.month = this.deadlineDate.getMonth();
                this.year = this.deadlineDate.getFullYear();
                this.showNoDate = true;

                document.addEventListener('reset.due.date', this.resetDueDate);
            } else {
                this.deadlineDate = null;
                this.month = this.currentMonth;
                this.year = this.currentYear;
                this.showNoDate = false;

                document.removeEventListener('reset.due.date', this.resetDueDate);
            }

            deadlineInput.value = date;

            // reset datepicker
            this.initDatepicker();
        },

        resetDueDate() {
            this.chooseDateShortcut('no_date');
        },

        initDatepicker,

        previousMonth,

        nextMonth
    }
}
