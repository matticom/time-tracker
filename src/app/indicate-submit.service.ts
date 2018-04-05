import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {SubmitEvent} from './submit-event.interface';

@Injectable()
export class IndicateSubmitService {

  private animation: Subject<SubmitEvent>;

  constructor() {
    this.createNotifyObservable();
  }

  private createNotifyObservable() {
    this.animation = new Subject<SubmitEvent>();
  }

  public feedObservableWithSubmitEvent(submitEvent: SubmitEvent){
    this.animation.next(submitEvent);
  }

  public getPreparedObservable(): Observable<SubmitEvent> {
    return this.animation;
  }
}
