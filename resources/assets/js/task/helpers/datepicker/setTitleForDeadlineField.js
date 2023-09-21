import {DAY_NAMES} from "../../../helpers/dayAndMonthNames.js";

export function setTitleForDeadlineField(deadlineField, day) {
    deadlineField.setAttribute('title', `${DAY_NAMES[day.getDay()]} ${day.getDate()} ${MONTH_NAMES[day.getMonth()]} ${day.getFullYear()}`);
}
