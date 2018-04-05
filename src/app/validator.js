"use strict";
var DateValidators = (function () {
    function DateValidators() {
    }
    DateValidators.earliestChoosableYear = function (minYear) {
        return function (control) {
            if (!control.value) {
                return null;
            }
            var inputYear = +control.value.slice(0, 4);
            if (minYear > inputYear) {
                return {
                    earliestYear: {
                        valid: false,
                        minYear: minYear
                    }
                };
            }
            return null;
        };
    };
    DateValidators.startGTend = function () {
        return function (dateInterval) {
            var start = dateInterval.controls["start"].value;
            var end = dateInterval.controls["end"].value;
            if (!start || !end) {
                return null;
            }
            var startInstant = new Date(start).getTime();
            var endInstant = new Date(end).getTime();
            if (startInstant >= endInstant) {
                return {
                    cmpDates: {
                        valid: false
                    }
                };
            }
            return null;
        };
    };
    return DateValidators;
}());
exports.DateValidators = DateValidators;
//# sourceMappingURL=validator.js.map