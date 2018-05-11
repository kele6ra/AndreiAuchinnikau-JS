function DatePicker(selector, initDate) {
    let dp_inputs = document.querySelectorAll(selector);
    (function checkInputs() {
        if (dp_inputs.length === 0) {
            return;
        }
    })();
        
    let current_date = new Date();
    let current_year = current_date.getFullYear();
    let current_month = current_date.getMonth();
    let input_dates = [], show_dates = [];

    this.setDatePicker = function () {
        for (let i = 0; i < dp_inputs.length; i++) {
            if (!dp_inputs[i].classList.contains('jst5-datepicker'))dp_inputs[i].classList.add('jst5-datepicker');
            if (dp_inputs[i].value){
                input_dates[i] = new Date(dp_inputs[i].value);
            } else if (initDate){
                input_dates[i] = new Date(initDate);    
            } else {
                input_dates[i] = current_date;
            }
            let renderer = new RenderDatePicker();
            dp_inputs[i].insertAdjacentHTML('afterEnd', renderer.renderCalendar(input_dates[i]));
        }
        
        openDatePicker();
        closeAllDatePickers();
        getDate();
        changeMonth();
    }
       
    function openDatePicker() {
        let dp_wraps = document.querySelectorAll('.jst5-datepicker__wrap');
        for (let i = 0; i < dp_inputs.length; i++) {
            dp_inputs[i].addEventListener('click', function () {
                show_dates[i] = undefined;
                for (let j = 0; j < dp_inputs.length; j++) {
                    if (i != j) dp_wraps[j].classList.remove("jst5-datepicker__wrap_visible");
                }
                if (dp_wraps[i].classList.contains("jst5-datepicker__wrap_visible")) {
                    dp_wraps[i].classList.remove("jst5-datepicker__wrap_visible");
                } else {
                    dp_wraps[i].classList.add("jst5-datepicker__wrap_visible");
                }
            });
        }
    }

    function getDate() {
        let dp_wraps = document.querySelectorAll('.jst5-datepicker__wrap');
        let dp_days = document.querySelectorAll(".jst5-datepicker__days");
        for (let i = 0; i < dp_days.length; i++) {
            dp_days[i].addEventListener('click', function (e) {
                if (!(e.target.classList.contains('jst5-datepicker__cell_empty')) && (e.target.classList.contains('jst5-datepicker__cell'))) {
                    if (!show_dates[i]) {
                        if (dp_inputs[i].value){
                            input_dates[i] = new Date(dp_inputs[i].value);
                        } else if (initDate){
                            input_dates[i] = new Date(initDate);    
                        } else {
                            input_dates[i] = current_date;
                        }
                        dp_inputs[i].value = input_dates[i].getFullYear() + "-" + (input_dates[i].getMonth() + 1) + "-" + e.target.innerHTML;
                    } else {
                        dp_inputs[i].value = show_dates[i].getFullYear() + "-" + (show_dates[i].getMonth() + 1) + "-" + e.target.innerHTML;
                    }
                    dp_wraps[i].classList.remove("jst5-datepicker__wrap_visible");
                    let renderer = new RenderDatePicker();
                    dp_days[i].innerHTML = renderer.renderDays(new Date(dp_inputs[i].value));
                    show_dates[i] = undefined;
                }
            });
        }
    }

    function changeMonth() {
        let dp_header = document.querySelectorAll(".jst5-datepicker__header");
        let dp_days = document.querySelectorAll(".jst5-datepicker__days");
        for (let i = 0; i < dp_days.length; i++) {
            dp_header[i].addEventListener('click', function (e) {
                show_dates[i] = show_dates[i] ? show_dates[i] : new Date(input_dates[i]);
                let month = show_dates[i].getMonth(), year = show_dates[i].getFullYear();
                if (e.target.classList.contains('jst5-arrow__wrap_left')) {
                    if (month == 0) {
                        month = 11
                        year--;
                    } else {
                        month--;
                    }
                    show_dates[i] = new Date(year, month);
                    let renderer = new RenderDatePicker();
                    dp_header[i].innerHTML = renderer.renderHeader(month, year);
                    dp_days[i].innerHTML = renderer.renderDays(show_dates[i], show_dates[i]?1:0);
                }

                if (e.target.classList.contains('jst5-arrow__wrap_right')) {
                    if (month == 11) {
                        month = 0
                        year++;
                    } else {
                        month++;
                    }
                    show_dates[i] = new Date(year, month);
                    let renderer = new RenderDatePicker();
                    dp_header[i].innerHTML = renderer.renderHeader(month, year);
                    dp_days[i].innerHTML = renderer.renderDays(show_dates[i],show_dates[i]?1:0);
                }

            });
        }
    }


    function closeAllDatePickers() {
        let dp_wraps = document.querySelectorAll('.jst5-datepicker__wrap');
        document.addEventListener('click', e => {
            let parent = e.target, dpClickFlag = 0, j=0;
            while(parent) {
                if(parent.classList.contains('jst5-datepicker') || parent.classList.contains('jst5-datepicker__wrap') || parent.classList.contains('jst5-arrow')){
                    dpClickFlag = 1;
                    break;
                } 
                parent = parent.parentElement;
            } 

            if (!dpClickFlag){
                for (let i = 0; i < dp_inputs.length; i++) {
                    dp_wraps[i].classList.remove("jst5-datepicker__wrap_visible");
                }
            }
        });
    }
}

function RenderDatePicker() {
    this.renderCalendar = function (input_date) {
        const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        let calendar_date = new Date(input_date);
    
        let datePicker = "<div class=\"jst5-datepicker\"><div class=\"jst5-datepicker__wrap\"><div class=\"jst5-datepicker__header\">";
        datePicker += this.renderHeader(calendar_date.getMonth(), calendar_date.getFullYear());
        datePicker += "</div><div class=\"jst5-datepicker__row\">";
    
        for (let i = 0; i < weekdays.length; i++) {
            datePicker += "<span class=\"jst5-datepicker__cell-weekdays\">" + weekdays[i] + "</span>";
        }
        datePicker += "</div><div class=\"jst5-datepicker__days\">";
        datePicker += this.renderDays(input_date);
    
        datePicker += '</div></div></div>';
        return (datePicker);
    }

    this.renderHeader = function (month, year) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let datePickerHeader = "<span class=\"jst5-arrow\"><img class=\"jst5-arrow__wrap jst5-arrow__wrap_left\" src=\"img/left.png\" alt=\"Prev\"></span>";
        datePickerHeader += "<span>" + months[month] + "&nbsp;" + year + "</span>";
        datePickerHeader += "<span class=\"jst5-arrow\"><img class=\"jst5-arrow__wrap jst5-arrow__wrap_right\" src=\"img/right.png\" alt=\"Next\"></span>";
        return (datePickerHeader);
    }

    this.renderDays = function (input_date, newMonth) {
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


