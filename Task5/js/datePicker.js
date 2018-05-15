function DatePicker(selector, initDate) {
    let dp_inputs = document.querySelectorAll(selector);
    (function checkInputs() {
        if (dp_inputs.length === 0) {
            return;
        }
    })();

    const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let current_date = new Date();
    let current_year = current_date.getFullYear();
    let current_month = current_date.getMonth();
    let input_dates = [], show_dates = [];

    this.setDatePicker = function () {
        for (let i = 0; i < dp_inputs.length; i++) {
            input_dates[i] = chooseInitDate(initDate, i);
            let renderer = new RenderDatePicker();
            dp_inputs[i].insertAdjacentHTML('afterEnd', renderer.renderCalendar(dp_inputs[i], input_dates[i], MONTHS[input_dates[i].getMonth()], WEEKDAYS));
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
                        input_dates[i] = chooseInitDate(initDate, i);
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
                    dp_header[i].innerHTML = renderer.renderHeader(year, MONTHS[month]);
                    dp_days[i].innerHTML = renderer.renderDays(show_dates[i], show_dates[i] ? 1 : 0);
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
                    dp_header[i].innerHTML = renderer.renderHeader(year, MONTHS[month]);
                    dp_days[i].innerHTML = renderer.renderDays(show_dates[i], show_dates[i] ? 1 : 0);
                }

            });
        }
    }

    function chooseInitDate(initDate, pickerIndex) {
        if (dp_inputs[pickerIndex].value) {
            return (new Date(dp_inputs[pickerIndex].value));
        } else if (initDate) {
            return (new Date(initDate));
        }
        return (current_date);
    }

    function closeAllDatePickers() {
        let dp_wraps = document.querySelectorAll('.jst5-datepicker__wrap');
        document.addEventListener('click', e => {
            let parent = e.target, dpClickFlag = 0, j = 0;
            while (parent) {
                if (parent.classList.contains('jst5-datepicker') || parent.classList.contains('jst5-datepicker__wrap') || parent.classList.contains('jst5-arrow')) {
                    dpClickFlag = 1;
                    break;
                }
                parent = parent.parentElement;
            }

            if (!dpClickFlag) {
                for (let i = 0; i < dp_inputs.length; i++) {
                    dp_wraps[i].classList.remove("jst5-datepicker__wrap_visible");
                }
            }
        });
    }
}



