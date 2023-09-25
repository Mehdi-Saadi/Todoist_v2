import {DAY_NAMES} from "../../helpers/dayAndMonthNames.js";
import {calendar_dot_5} from "../helpers/datepicker/calendarDotSVG.js";
import {nextMonth, previousMonth} from "../helpers/datepicker/navigate.js";
import {initDatepicker} from "../helpers/datepicker/initDatepicker.js";
import {isPassedDay, isSelected, isToday} from "../helpers/datepicker/displayConditions.js";
import {controlDate} from "../helpers/datepicker/controlDate.js";

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

            // event listener for reseting the datepicker after sending the new task
            document.addEventListener('reset.due.date', () => {
                this.chooseDateShortcut('no_date');
            });
        },

        isToday,

        isPassedDay,

        isSelected,

        chooseDate(date) {
            if (this.isPassedDay(date)) {return;}

            const dueDateBtn = document.querySelector('button[data-dropdown-toggle="new-task-form-due-date"]');
            const deadlineInput = document.getElementById('new-task-form-deadline-date');

            // convert selected date to timestamp
            date = new Date(this.year, this.month, date) / 1000;

            let response = controlDate(date);

            this.resetAndSetData(deadlineInput, dueDateBtn, response.date, response.color, response.day);
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
            } else {
                this.deadlineDate = null;
                this.month = this.currentMonth;
                this.year = this.currentYear;
                this.showNoDate = false;
            }

            deadlineInput.value = date;

            // reset datepicker
            this.initDatepicker();
        },

        initDatepicker,

        previousMonth,

        nextMonth
    }
}
