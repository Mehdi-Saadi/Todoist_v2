import {ajaxRequest} from "../../helpers/ajaxRequest.js";
import {toastAlert} from "../../helpers/alert.js";
import {DAY_NAMES} from "../../helpers/dayAndMonthNames.js";
import {setTitleForDeadlineField} from "./setTitleForDeadlineField.js";

const calendar_dot = `<svg class="w-4 h-4 mr-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm12 10a1 1 0 11-2 0 1 1 0 012 0zM7 8a.5.5 0 000 1h10a.5.5 0 000-1H7z" fill="currentColor"></path></svg>`;

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
