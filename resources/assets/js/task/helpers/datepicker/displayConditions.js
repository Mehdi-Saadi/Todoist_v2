export function isToday(date) {
    const today = new Date();
    date = new Date(this.year, this.month, date);

    return today.toDateString() === date.toDateString();
}

export function isPassedDay(date) {
    const timestampOfDate = new Date(this.year, this.month, date) / 1000;
    return timestampOfDate < this.timestampOfTodayInSec;
}

export function isSelected(date) {
    if (! this.deadlineDate) {return false;}
    date = new Date(this.year, this.month, date);

    return date.toDateString() === this.deadlineDate.toDateString();
}
