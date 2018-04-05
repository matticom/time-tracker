import {FormDateConverter} from './form-date-converter';

describe('FormDateConverterService', () => {

  let jsDate: Date = new Date(2017, 10, 30, 15, 57, 0);
  let jsDate2: Date = new Date(2017, 0, 1, 7, 7, 0);
  let formDate: string = "2017-11-30T15:57";
  let formDate2: string = "2017-01-01T07:07";
  let formDateUTC: string = "2017-11-30T15:57:00.000Z";
  let dayCuttedDate: Date = new Date("2017-11-30");


  it('formDate should be properly converted to JsDate', () => {
    let convJsDate: Date = FormDateConverter.toJsDate(formDate);
    expect(jsDate).toEqual(convJsDate);
    let convJsDate2: Date = FormDateConverter.toJsDate(formDate2);
    expect(jsDate2).toEqual(convJsDate2);
  });

  it('jsDate should be properly converted to formDate', () => {
    let convFormDate: string = FormDateConverter.toFormDate(jsDate);
    expect(formDate).toEqual(convFormDate);
    let convFormDate2: string = FormDateConverter.toFormDate(jsDate2);
    expect(formDate2).toEqual(convFormDate2);
  });

  it('formDate should be converted to day-cutted instant', () => {
    let datCuttedDateForm: Date = new Date(FormDateConverter.getToDayCuttedInstant(formDateUTC));
    expect(dayCuttedDate).toEqual(datCuttedDateForm);
  });

});
