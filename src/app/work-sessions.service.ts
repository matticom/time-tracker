import { Injectable } from '@angular/core';
import {WorkSession} from './workSession';
import {HttpClient} from '@angular/common/http';
import {Headers} from '@angular/http';

interface ItemsResponse {
  data: Object[];
}

@Injectable()
export class WorkSessionsService {

  constructor(private http: HttpClient) { }

  getWorkSessions(): Promise<WorkSession[]> {
    const url = 'api/times';
    return this.http.get<ItemsResponse>(url)
      .map(response => response.data as WorkSession[])
      .retry(2)
      .toPromise();
  }

  addWorkSession(session: WorkSession): Promise<WorkSession> {
    const url = 'api/times';
    let headers = new Headers({'Content-Type': 'application/json'});
    console.log(JSON.stringify(session.toObject()));
    return this.http
      .post(url, session.toObject(), headers)
      .retry(2)
      .toPromise()
      .then(response => response['data'] as WorkSession)
      .catch(error => console.log(error));
  }
}
