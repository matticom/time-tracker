import {FormControl, FormGroup} from '@angular/forms';
import {FormDateConverter} from './form-date-converter';

export class DateValidators {
  static earliestChoosableYear(minYear: number) {
    return function (control: FormControl) {
      if(!control.value) {
        return null;
      }
      let inputYear: number = +control.value.slice(0, 4);
      if (minYear > inputYear) {
        return {
          earliestYear: {
            valid: false,
            minYear: minYear
          }
        }
      }
      return null;
    }
  }

  static startGTend() {
    return function (dateInterval: FormGroup) {
      let start: string = dateInterval.controls["start"].value;
      let end: string = dateInterval.controls["end"].value;
      if (!start || !end) {
        return null;
      }
      let startInstant: number = new Date(start).getTime();
      let endInstant: number = new Date(end).getTime();
      if (startInstant >= endInstant) {
        return {
          cmpDates: {
            valid: false
          }
        }
      }
      return null;
    }
  }
}
