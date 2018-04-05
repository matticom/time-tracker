"use strict";
var form_date_converter_1 = require("./form-date-converter");
describe('FormDateConverterService', function () {
    var jsDate = new Date(2017, 10, 30, 15, 57, 0);
    var jsDate2 = new Date(2017, 0, 1, 7, 7, 0);
    var formDate = "2017-11-30T15:57";
    var formDate2 = "2017-01-01T07:07";
    var formDateUTC = "2017-11-30T15:57:00.000Z";
    var dayCuttedDate = new Date("2017-11-30");
    it('formDate should be properly converted to JsDate', function () {
        var convJsDate = form_date_converter_1.FormDateConverter.toJsDate(formDate);
        expect(jsDate).toEqual(convJsDate);
        var convJsDate2 = form_date_converter_1.FormDateConverter.toJsDate(formDate2);
        expect(jsDate2).toEqual(convJsDate2);
    });
    it('jsDate should be properly converted to formDate', function () {
        var convFormDate = form_date_converter_1.FormDateConverter.toFormDate(jsDate);
        expect(formDate).toEqual(convFormDate);
        var convFormDate2 = form_date_converter_1.FormDateConverter.toFormDate(jsDate2);
        expect(formDate2).toEqual(convFormDate2);
    });
    it('formDate should be converted to day-cutted instant', function () {
        var datCuttedDateForm = new Date(form_date_converter_1.FormDateConverter.getToDayCuttedInstant(formDateUTC));
        expect(dayCuttedDate).toEqual(datCuttedDateForm);
    });
});
//# sourceMappingURL=form-date-converter.spec.js.map