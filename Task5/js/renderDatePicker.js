function RenderDatePicker() {
    this.renderCalendar = function (element, input_date, month, weekDaysList) {
        let calendar_date = new Date(input_date);
        if (!element.classList.contains('jst5-datepicker')) element.classList.add('jst5-datepicker');
        let datePicker = "<div class=\"jst5-datepicker\"><div class=\"jst5-datepicker__wrap\"><div class=\"jst5-datepicker__header\">";
        datePicker += this.renderHeader(month, calendar_date.getFullYear());
        datePicker += "</div><div class=\"jst5-datepicker__row\">";

        for (let i = 0; i < weekDaysList.length; i++) {
            datePicker += "<span class=\"jst5-datepicker__cell-weekdays\">" + weekDaysList[i] + "</span>";
        }
        datePicker += "</div><div class=\"jst5-datepicker__days\">";
        datePicker += this.renderDays(input_date);

        datePicker += '</div></div></div>';
        return (datePicker);
    }

    this.renderHeader = function (month, year) {
        let datePickerHeader = "<span class=\"jst5-arrow\"><img class=\"jst5-arrow__wrap jst5-arrow__wrap_left\" src=\"img/left.png\" alt=\"Prev\"></span>";
        datePickerHeader += "<span>" + month + "&nbsp;" + year + "</span>";
        datePickerHeader += "<span class=\"jst5-arrow\"><img class=\"jst5-arrow__wrap jst5-arrow__wrap_right\" src=\"img/right.png\" alt=\"Next\"></span>";
        return (datePickerHeader);
    }

    this.renderDays = function (input_date, newMonth, ) {
        let current_date = new Date();
        let calendar_date = new Date(input_date);
        calendar_date.setDate(1);
        let month = calendar_date.getMonth(), year = calendar_date.getMonth();
        let datePickerDays = "<div class=\"jst5-datepicker__row\">";

        for (let i = 0; i < calendar_date.getDay(); i++) {
            datePickerDays += "<span class=\"jst5-datepicker__cell jst5-datepicker__cell_empty\"></span>";
        }

        while (calendar_date.getMonth() == month) {
            if (compareDates(calendar_date, current_date)) {
                datePickerDays += "<span class=\"jst5-datepicker__cell jst5-datepicker__cell_yellow\">" + calendar_date.getDate() + "</span>";
            } else if (compareDates(calendar_date, input_date) && !newMonth) {
                datePickerDays += "<span class=\"jst5-datepicker__cell jst5-datepicker__cell_green\">" + calendar_date.getDate() + "</span>";
            } else {
                datePickerDays += "<span class=\"jst5-datepicker__cell jst5-datepicker__cell_grey\">" + calendar_date.getDate() + "</span>";
            }
            if ((calendar_date.getDay() == 6) && (calendar_date.getDate() != getLastDayOfMonth(year, month))) {
                datePickerDays += '</div><div class=\"jst5-datepicker__row\">';
            }
            calendar_date.setDate(calendar_date.getDate() + 1);
        }

        if (calendar_date.getDay() != 0) {
            for (let i = calendar_date.getDay(); i < 6; i++) {
                datePickerDays += '<span class=\"jst5-datepicker__cell jst5-datepicker__cell_empty\"></span>';
            }
        }

        datePickerDays += '</div></div>';
        return (datePickerDays);
    }

    function getLastDayOfMonth(year, month) {
        let date = new Date(year, month + 1, 0);
        return date.getDate();
    }

    function compareDates(date1, date2) {
        if ((date1.getFullYear() == date2.getFullYear()) && (date1.getMonth() == date2.getMonth()) && (date1.getDate() == date2.getDate())) {
            return (true);
        }
        else {
            return (false);
        }
    }

}
