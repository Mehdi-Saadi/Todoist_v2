import {ajaxRequest} from "../../helpers/ajaxRequest.js";
import {FULL_DAY_NAMES} from "../../helpers/dayAndMonthNames.js";
import {toastAlert} from "../../helpers/alert.js";
import {setTitleForDeadlineField} from "./helpers/setTitleForDeadlineField.js";
import {calendar_dot} from "./helpers/calendarDotSVG.js";

export function datepicker(savedDate, taskID) {
    return {
        timestampOfTodayInSec: null,
        currentMonth: null,
        currentYear: null,
        month: null,
        year: null,
        daysOfMonth: [],
        blankDays: [],

        initDate() {
            const today = new Date();
            this.currentMonth = today.getMonth();
            this.currentYear = today.getFullYear();
            this.month = this.currentMonth;
            this.year = this.currentYear;
            this.timestampOfTodayInSec = new Date(this.year, this.month, today.getDate()) / 1000;
        },

        isToday(date) {
            const today = new Date();
            date = new Date(this.year, this.month, date);

            return today.toDateString() === date.toDateString();
        },

        isPassedDay(date)
        {
            const timestampOfDate = new Date(this.year, this.month, date) / 1000;
            return timestampOfDate < this.timestampOfTodayInSec;
        },

        isSelected(date)
        {
            date = new Date(this.year, this.month, date);
            savedDate = new Date(savedDate);

            return date.toDateString() === savedDate.toDateString();
        },

        setDate(date) {
            if (this.isPassedDay(date)) {return;}

            const deadlineField = document.getElementById(`task-deadline-${taskID}`);
            let today = this.timestampOfTodayInSec,
                tomorrow = today + 86400,
                thirdDay = tomorrow + 86400,
                fourthDay = thirdDay + 86400,
                fifthDay = fourthDay + 86400,
                sixthDay = fifthDay + 86400,
                seventhDay = sixthDay + 86400,
                eighthDay = seventhDay + 86400,
                day,
                color,
                data = {
                    id: taskID
                };

            deadlineField.removeAttribute('class');

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
            }

            setTitleForDeadlineField(deadlineField, date);

            deadlineField.setAttribute('class', `flex items-center ${color}`);
            deadlineField.innerHTML = `${calendar_dot}${day}`;

            toastAlert('', `Due date updated to ${day}`);

            data.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

            ajaxRequest('put', '/task/update/date', data, function () {});
        },

        initDatepicker() {
            let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
            let firstDayOfWeek = new Date(this.year, this.month).getDay(); // find where to start calendar day of week
            let blankDaysArray = [];
            let daysOfMonthArray = [];

            if (firstDayOfWeek === 0) {
                firstDayOfWeek = 7;
            }

            for ( let i = 2; i <= firstDayOfWeek; i++) {
                blankDaysArray.push(i);
            }

            for ( let i = 1; i <= daysInMonth; i++) {
                daysOfMonthArray.push(i);
            }

            this.blankDays = blankDaysArray;
            this.daysOfMonth = daysOfMonthArray;
        },

        previousMonth() {
            if (this.month === this.currentMonth && this.year === this.currentYear) {return;}
            if (this.month  === 0) {
                this.year--;
                this.month = 11;
            } else {
                this.month--;
            }
            this.initDatepicker();
        },

        nextMonth() {
            if (this.month === 11) {
                this.year++;
                this.month = 0;
            } else {
                this.month++;
            }
            this.initDatepicker();
        }
    }
}
