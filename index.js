/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes,interval) {
    if ((hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59)) {

        var ONE_HOURSE_MINUTES = 60;
        var DAY_TOTAL_HOURSE = 24;
        //Вычислили общее колличество минут
        var totalMinutes = (hours * ONE_HOURSE_MINUTES) + minutes + interval;

        //Вычислим колличесво дней в минутах

        var totalDays = totalMinutes / (ONE_HOURSE_MINUTES * DAY_TOTAL_HOURSE);

        //Выделим дробную часть

        var vspom = totalDays;
        var intTotalDay = parseInt(vspom); //Целая часть
        var ModTotalDays = vspom - intTotalDay; //Дробная часть


        //Дни из дробной части переводим в часы

        var totalDayHours = ModTotalDays * DAY_TOTAL_HOURSE;

        //Выделим дробную часть

        var z = totalDayHours;
        var newHours = parseInt(z); //Целая часть
        var hoursMinuts = z - newHours; //Дробная часть


        //Часы из дробной части переводим в минуты
        var newMinuts = hoursMinuts * ONE_HOURSE_MINUTES;
        var newMinuts1 = Math.round(newMinuts);
        
        if (newHours < 10) {
              newHours = '0' + newHours;
            }
            if (newMinuts1 < 10) {
              newMinuts1 = '0' + newMinuts1;
            }

        return newHours + ':' + newMinuts1;

    }
};
