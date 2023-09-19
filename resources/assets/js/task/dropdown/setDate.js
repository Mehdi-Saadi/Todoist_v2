import {ajaxRequest} from "../../helpers/ajaxRequest.js";
import {toastAlert} from "../../helpers/alert.js";
import {DAY_NAMES} from "../../helpers/dayAndMonthNames.js";
import {setTitleForDeadlineField} from "./helpers/setTitleForDeadlineField.js";
import {calendar_dot} from "./helpers/calendarDotSVG.js";

export function setDate(selectedDate, taskId) {
    const deadlineField = document.getElementById(`task-deadline-${taskId}`),
    today = new Date();
    let day,
        color,
        data = {
            id: taskId,
        };

    deadlineField.removeAttribute('class');

    switch (selectedDate) {
        case 'today':
            day = 'Today';
            color = 'text-green-700';
            setTitleForDeadlineField(deadlineField, today);

            selectedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
            break;
        case 'tomorrow':
            const tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);

            day = 'Tomorrow';
            color = 'text-yellow-600';
            setTitleForDeadlineField(deadlineField, tomorrow);

            selectedDate = `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`;
            break;
        case 'this_weekend':
            let weekendDay = new Date();

            while (true) {
                if(DAY_NAMES[weekendDay.getDay()] === 'Sat') {
                    break;
                }
                weekendDay.setDate(weekendDay.getDate() + 1);
            }

            day = 'Saturday';
            color = 'text-purple-600';
            setTitleForDeadlineField(deadlineField, weekendDay);

            selectedDate = `${weekendDay.getFullYear()}-${weekendDay.getMonth() + 1}-${weekendDay.getDate()}`;
            break;
        case 'next_week':
            let weekDay = new Date();

            if(DAY_NAMES[weekDay.getDay()] === 'Mon') {
                weekDay.setDate(weekDay.getDate() + 1);
            }

            while (true) {
                if(DAY_NAMES[weekDay.getDay()] === 'Mon') {
                    break;
                }
                weekDay.setDate(weekDay.getDate() + 1);
            }

            day = 'Monday';
            color = 'text-purple-600';
            setTitleForDeadlineField(deadlineField, weekDay);

            selectedDate = `${weekDay.getFullYear()}-${weekDay.getMonth() + 1}-${weekDay.getDate()}`;
    }
    deadlineField.setAttribute('class', `flex items-center ${color}`);
    deadlineField.innerHTML = `${calendar_dot + day}`;
    data.date = selectedDate;

    toastAlert('', `Due date updated to ${day}`);

    ajaxRequest('put', '/task/update/date', data, function () {});
}
