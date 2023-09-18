import {ajaxRequest} from "../../helpers/ajaxRequest.js";
import {toastAlert} from "../../helpers/alert.js";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const calendar_dot = `<svg class="w-4 h-4 mr-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm12 10a1 1 0 11-2 0 1 1 0 012 0zM7 8a.5.5 0 000 1h10a.5.5 0 000-1H7z" fill="currentColor"></path></svg>`;

function setTitleForDeadlineField(deadlineField, day) {
    deadlineField.setAttribute('title', `${dayNames[day.getDay()]} ${day.getDate()} ${monthNames[day.getMonth()]} ${day.getFullYear()}`);
}

export function setDate(selectedDate, taskId) {
    const deadlineField = document.getElementById(`task-deadline-${taskId}`);
    const today = new Date();
    let data = {
        id: taskId,
    };

    deadlineField.removeAttribute('class');

    switch (selectedDate) {
        case 'today':
            deadlineField.innerHTML = `${calendar_dot}Today`;
            deadlineField.setAttribute('class', 'flex items-center text-green-700');
            setTitleForDeadlineField(deadlineField, today);

            selectedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
            toastAlert('', 'Due date updated to Today');
            break;
        case 'tomorrow':
            const tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);

            deadlineField.innerHTML = `${calendar_dot}Tomorrow`;
            deadlineField.setAttribute('class', 'flex items-center text-yellow-600');
            setTitleForDeadlineField(deadlineField, tomorrow);

            selectedDate = `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`;
            toastAlert('', 'Due date updated to Tomorrow');
            break;
        case 'this_weekend':
            const weekendDay = new Date();

            while (true) {
                if(dayNames[weekendDay.getDay()] === 'Sat') {
                    break;
                }
                weekendDay.setDate(weekendDay.getDate() + 1);
            }

            deadlineField.innerHTML = `${calendar_dot}Saturday`;
            deadlineField.setAttribute('class', 'flex items-center text-purple-600');
            setTitleForDeadlineField(deadlineField, weekendDay);

            selectedDate = `${weekendDay.getFullYear()}-${weekendDay.getMonth() + 1}-${weekendDay.getDate()}`;
            toastAlert('', 'Due date updated to Saturday');
            break;
        case 'next_week':
            const weekDay = new Date();

            if(dayNames[weekDay.getDay()] === 'Mon') {
                weekDay.setDate(weekDay.getDate() + 1);
            }

            while (true) {
                if(dayNames[weekDay.getDay()] === 'Mon') {
                    break;
                }
                weekDay.setDate(weekDay.getDate() + 1);
            }

            deadlineField.innerHTML = `${calendar_dot}Monday`;
            deadlineField.setAttribute('class', 'flex items-center text-purple-600');
            setTitleForDeadlineField(deadlineField, weekDay);

            selectedDate = `${weekDay.getFullYear()}-${weekDay.getMonth() + 1}-${weekDay.getDate()}`;
            toastAlert('', 'Due date updated to Monday');
    }
    data.date = selectedDate;

    ajaxRequest('put', '/task/update/date', data, function () {});
}
