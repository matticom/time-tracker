import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterService} from '../filter.service';
import {FormControl, FormGroup} from '@angular/forms';
import {WorkSession} from '../workSession';
import {FilterData} from '../filter-data.interface';
import {DateValidators} from '../validator';
import {WorkSessionsService} from '../work-sessions.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit {

  @Output('http-error') httpError = new EventEmitter<string>();

  private workSessions: WorkSession[];
  private filteredWorkSessions: WorkSession[];

  public test: string;

  private filterForm: FormGroup;
  private employeeFC: FormControl;
  private projectFC: FormControl;
  private startFC: FormControl;
  private endFC: FormControl;

  private employees: string[];
  private projects: string[];

  private readonly employeeEntity: string  = 'employee';
  private readonly projectEntity: string = 'project';
  private readonly startEntity: string = 'start';
  private readonly endEntity: string = 'end';

  private filterData: FilterData;

  constructor(private filterService: FilterService,
              private wsService: WorkSessionsService) {
    this.filterData = {
      employee: {entity: this.employeeEntity},
      project: {entity: this.projectEntity},
      start: {entity: this.startEntity},
      end: {entity: this.endEntity}
    };
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.getWorkSessions();
    this.filterForm.valueChanges.do(() => this.filterWS()).subscribe();
  }

  private createFormControls(): void {
    this.employeeFC = new FormControl('');
    this.projectFC = new FormControl('');
    this.startFC = new FormControl('');
    this.endFC = new FormControl('');
  }

  private createForm(): void {
    this.filterForm = new FormGroup({
      employee: this.employeeFC,
      project: this.projectFC,
      start: this.startFC,
      end: this.endFC
    }, DateValidators.startGTend());
  }

  public filterWS(): void {
    this.filterData = {
      employee: {entity: this.employeeEntity, filter: this.employeeFC.value},
      project: {entity: this.projectEntity, filter: this.projectFC.value},
      start: {entity: this.startEntity, filter: new Date(this.startFC.value).getTime()},
      end: {entity: this.endEntity, filter: new Date(this.endFC.value).getTime()}
    };
    this.filterService.filterEntities(this.filterData, this.workSessions)
      .then(filteredWS => this.filteredWorkSessions = filteredWS);
  }

  private getEntities(): void {
    this.filterService.getEntities('employee', this.workSessions)
      .then(employees => this.employees = employees);
    this.filterService.getEntities('project', this.workSessions)
      .then(projects => this.projects = projects);
  }

  public getWorkSessions(): void {
    this.wsService.getWorkSessions()
      .then(wSessions => {
        this.successfulResponse(wSessions);
      },(err: HttpErrorResponse) => {
        this.errorHandling(err);
      });
  }

  private successfulResponse(workSessions: WorkSession[]){
    this.httpError.emit("");
    this.workSessions = workSessions;
    this.getEntities();
    this.filteredWorkSessions = workSessions;
  }

  private errorHandling(err: HttpErrorResponse): void {
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly..
      this.httpError.emit("Network is not available at the moment. Time for a coffee :)");
      this.test = err.status.toString();
      console.log('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.httpError.emit(`Backend returned code ${err.status}, body was: ${err.error}`);
      console.log(this.httpError);
    }
  }
}
