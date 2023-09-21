export function previousMonth() {
    if (this.month === this.currentMonth && this.year === this.currentYear) {return;}
    if (this.month  === 0) {
        this.year--;
        this.month = 11;
    } else {
        this.month--;
    }
    this.initDatepicker();
}

export function nextMonth() {
    if (this.month === 11) {
        this.year++;
        this.month = 0;
    } else {
        this.month++;
    }
    this.initDatepicker();
}
