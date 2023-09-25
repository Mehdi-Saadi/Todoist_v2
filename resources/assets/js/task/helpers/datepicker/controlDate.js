import {FULL_DAY_NAMES} from "../../../helpers/dayAndMonthNames.js";
const dateOfToday = new Date();
const today = new Date(dateOfToday.getFullYear(), dateOfToday.getMonth(), dateOfToday.getDate()) / 1000,
    tomorrow = today + 86400,
    thirdDay = tomorrow + 86400,
    fourthDay = thirdDay + 86400,
    fifthDay = fourthDay + 86400,
    sixthDay = fifthDay + 86400,
    seventhDay = sixthDay + 86400,
    eighthDay = seventhDay + 86400;

export function controlDate(date) {
    let day, color;

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

    return {
        date: date,
        day: day,
        color: color
    }
}
