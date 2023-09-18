export const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function datepicker() {
    return {
        timestampOfToday: null,
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
            this.timestampOfToday = new Date(this.year, this.month, today.getDate()) / 1000;
        },

        isToday(date) {
            const today = new Date();
            const d = new Date(this.year, this.month, date);

            return today.toDateString() === d.toDateString();
        },

        isPassedDay(date)
        {
            const timestampOfDate = new Date(this.year, this.month, date) / 1000;
            return timestampOfDate < this.timestampOfToday;
        },

        getDateValue(date) {
            if (this.isPassedDay(date)) {return;}
            let selectedDate = new Date(this.year, this.month, date);

            selectedDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;

            console.log(selectedDate)
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
