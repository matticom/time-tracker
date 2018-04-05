
export class FormDateConverter {

  public static toFormDate(jsDate: Date): string {
    let options: Object = {
      year: 'numeric',
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };

    let strDate: string = jsDate.toLocaleDateString('de-DE', options);
    let YYYY = strDate.slice(6,10);
    let MM = strDate.slice(3,5);
    let DD = strDate.slice(0,2);
    let HH = strDate.slice(12,14);
    let II = strDate.slice(15,17);
    return YYYY + '-' + MM + '-' + DD + 'T' + HH + ':' + II;
  }

  public static toJsDate(formDate: string): Date {
    return new Date(  +formDate.slice(0,4),
      // Js Date Month: 0-11 ==> -1
      (+formDate.slice(5,7))-1,
      +formDate.slice(8,10),
      +formDate.slice(11,13),
      +formDate.slice(14,16));
  }

  public static getToDayCuttedInstant(dateStringUTC: string): number {
    return new Date(dateStringUTC.slice(0,10) + "T00:00:00.000Z").getTime();
  }

  // Interpretion der Zeiten im Konstruktor:

  // console.log(new Date("2017-07-29T00:00:00.000Z").toLocaleDateString('de-DE', {
  // year: 'numeric',
  // month: "2-digit",
  // day: "2-digit",
  // hour: "2-digit",
  // minute: "2-digit"
  // }));
  // console.log(new Date(2017,6,29).toLocaleDateString('de-DE', {    --> Lokale Zeit als Input!!!
  // year: 'numeric',
  // month: "2-digit",
  // day: "2-digit",
  // hour: "2-digit",
  // minute: "2-digit"
  // }));
  // console.log(new Date(2017,6,29).toISOString());

}
