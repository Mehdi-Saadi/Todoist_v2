export function initDatepicker() {
    let daysInMonth = new Date(this.year, this.month + 1, 0).getDate(),
        firstDayOfWeek = new Date(this.year, this.month).getDay(), // find where to start calendar day of week
        blankDaysArray = [],
        daysOfMonthArray = [];

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
}
