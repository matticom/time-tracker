"use strict";
var FormDateConverter = (function () {
    function FormDateConverter() {
    }
    FormDateConverter.toFormDate = function (jsDate) {
        var options = {
            year: 'numeric',
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        };
        var strDate = jsDate.toLocaleDateString('de-DE', options);
        var YYYY = strDate.slice(6, 10);
        var MM = strDate.slice(3, 5);
        var DD = strDate.slice(0, 2);
        var HH = strDate.slice(12, 14);
        var II = strDate.slice(15, 17);
        return YYYY + '-' + MM + '-' + DD + 'T' + HH + ':' + II;
    };
    FormDateConverter.toJsDate = function (formDate) {
        return new Date(+formDate.slice(0, 4), 
        // Js Date Month: 0-11 ==> -1
        (+formDate.slice(5, 7)) - 1, +formDate.slice(8, 10), +formDate.slice(11, 13), +formDate.slice(14, 16));
    };
    FormDateConverter.getToDayCuttedInstant = function (dateStringUTC) {
        return new Date(dateStringUTC.slice(0, 10) + "T00:00:00.000Z").getTime();
    };
    return FormDateConverter;
}());
exports.FormDateConverter = FormDateConverter;
//# sourceMappingURL=form-date-converter.js.map