import {ajaxRequest} from "../../helpers/ajaxRequest";
import {DAY_NAMES} from "../../helpers/dayAndMonthNames";
import {toastAlert} from "../../helpers/alert";
import {setTitleForDeadlineField} from "../helpers/datepicker/setTitleForDeadlineField";
import {calendar_dot_4} from "../helpers/datepicker/calendarDotSVG";
import {nextMonth, previousMonth} from "../helpers/datepicker/navigate";
import {initDatepicker} from "../helpers/datepicker/initDatepicker";
import {isPassedDay, isSelected, isToday} from "../helpers/datepicker/displayConditions";
import {controlDate} from "../helpers/datepicker/controlDate";

export function datepickerSave(taskID, deadlineDate = '') {
    return {
        currentMonth: null,
        currentYear: null,
        timestampOfTodayInSec: null,
        month: null,
        year: null,
        daysOfMonth: [],
        blankDays: [],
        deadlineDate: null,
        showNoDate: null,

        initDate() {
            const today = new Date();
            this.currentMonth = today.getMonth();
            this.currentYear = today.getFullYear();
            this.timestampOfTodayInSec = new Date(this.currentYear, this.currentMonth, today.getDate()) / 1000;
            if (deadlineDate !== '') {
                // convert deadlineDate string to Date object
                this.deadlineDate = new Date(deadlineDate);
                // open calendar on deadline month
                this.month = this.deadlineDate.getMonth();
                this.year = this.deadlineDate.getFullYear();

                this.showNoDate = true;
            } else {
                this.month = this.currentMonth;
                this.year = this.currentYear;

                this.showNoDate = false;
            }
        },

        isToday,

        isPassedDay,

        isSelected,

        chooseDate(date) {
            if (this.isPassedDay(date)) {return;}

            const deadlineField = document.getElementById(`task-deadline-${taskID}`);
            let data = {
                    id: taskID
                };

            // convert selected date to timestamp
            date = new Date(this.year, this.month, date) / 1000;

            let response = controlDate(date);

            this.resetAndSendData(deadlineField, response.date, response.color, response.day, data);
        },

        chooseDateShortcut(date) {
            const deadlineField = document.getElementById(`task-deadline-${taskID}`);
            let day,
                color,
                data = {
                    id: taskID,
                };

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
                    day = '';
                    color = '';
            }

            this.resetAndSendData(deadlineField, date, color, day, data);
        },

        resetAndSendData(deadlineField, date, color, day, data) {
            // reset deadline filed

            if (date !== '') {
                setTitleForDeadlineField(deadlineField, date);

                deadlineField.removeAttribute('class');
                deadlineField.setAttribute('class', `flex items-center ${color}`);
                deadlineField.innerHTML = `${calendar_dot_4 + day}`;
                data.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

                // convert new deadlineDate string to Date object
                this.deadlineDate = new Date(data.date);
                // open calendar on deadline month
                this.month = this.deadlineDate.getMonth();
                this.year = this.deadlineDate.getFullYear();

                toastAlert('', `Due date updated to ${day}`);
                this.showNoDate = true;
            } else {
                deadlineField.innerHTML = ``;

                data.date = null;

                this.deadlineDate = null;
                this.month = this.currentMonth;
                this.year = this.currentYear;

                toastAlert('', `Due date updated`);
                this.showNoDate = false;
            }

            // reset datepicker
            this.initDatepicker();

            ajaxRequest('put', '/task/update/date', data, function () {});
        },

        initDatepicker,

        previousMonth,

        nextMonth
    }
}
