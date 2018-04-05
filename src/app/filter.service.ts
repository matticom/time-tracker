import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {FormDateConverter} from './form-date-converter';
import {WorkSession} from './workSession';
import {FilterData} from './filter-data.interface';

@Injectable()
export class FilterService {

  getEntities(entityName: string, workSessions: WorkSession[]): Promise<string[]> {
    return Observable.from(workSessions)
      .map(workSession => workSession[entityName])
      .toArray()
      .map(entityArray => new Set(entityArray))
      .map(entitySet => Array.from(entitySet.values()))
      .retry(2)
      .toPromise()
      .catch(error =>  console.log(error));
  }

  filterEntities(filterData: FilterData, workSessions: WorkSession[]): Promise<WorkSession[]> {
    return Observable.from(workSessions)
      .filter(ws => !filterData.employee.filter
        || ws[filterData.employee.entity] === filterData.employee.filter)
      .filter(ws => !filterData.project.filter
        || ws[filterData.project.entity] === filterData.project.filter)
      .filter(ws => !filterData.start.filter
        || FormDateConverter.getToDayCuttedInstant(ws[filterData.end.entity]) >= filterData.start.filter)
      .filter(ws => !filterData.end.filter
        || FormDateConverter.getToDayCuttedInstant(ws[filterData.start.entity]) <= filterData.end.filter)
      .toArray()
      .toPromise();
  }
}
