/// <reference path="../../../typings/index.d.ts"/>

import {Component, OnInit, ViewChild, ElementRef, OnChanges} from '@angular/core';
import { WorkSession } from '../workSession';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DateValidators} from '../validator';
import {FormDateConverter} from '../form-date-converter';
import {MockLoginService} from '../mock-login.service';
import {IdGeneratorService} from '../id-generator.service';
import {WorkSessionsService} from '../work-sessions.service';
import {IndicateSubmitService} from '../indicate-submit.service';
import {Router} from '@angular/router';
import {SubmitEvent} from '../submit-event.interface';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'ws-form',
  templateUrl: './workSession-form.component.html'
})

export class WorkSessionFormComponent implements OnInit {

  private projects: Array<string>;
  private workSession: WorkSession;
  private minYear: number;

  private timeTrackerForm: FormGroup;
  private project: FormControl;
  private start: FormControl;
  private end: FormControl;
  private breakLength: FormControl;
  private activities: FormControl;

  constructor(private loginService: MockLoginService,
              private idService: IdGeneratorService,
              private wsService: WorkSessionsService,
              private indicateService: IndicateSubmitService,
              private router: Router) {
    this.serviceInterfaceRetrieveData();
    this.minYear = new Date().getFullYear()-1;
  }

  serviceInterfaceRetrieveData(): void {
    // ToDo: Service für Daten implementieren
    this.projects = ['project1', 'project2',
      'project3', 'project4'];
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
    this.setInitialValues();
  }

  private createFormControls(): void {
    this.project = new FormControl('', Validators.required);
    this.start = new FormControl('', [Validators.required,
     DateValidators.earliestChoosableYear(this.minYear)]);
    this.end = new FormControl('');
    this.breakLength = new FormControl('');
    this.activities = new FormControl('');
  }

  private createForm(): void {
    this.timeTrackerForm = new FormGroup({
      project: this.project,
      start: this.start,
      end: this.end,
      breakLength: this.breakLength,
      activities: this.activities
    });
    this.timeTrackerForm.setValidators(DateValidators.startGTend());
  }

  private setInitialValues(): void {
    this.project.setValue(this.projects[0]);
    let now = new Date();
    this.start.setValue(FormDateConverter.toFormDate(now));
    this.end.setValue(this.addHoursToStart(this.start.value, 8));
    this.breakLength.setValue(30);
  }

  private addHoursToStart(start: string, hours: number): string {
    let local: Date = FormDateConverter.toJsDate(start);
    local.setHours(local.getHours() + hours);
    return FormDateConverter.toFormDate(local);
  }

  private setPreselectedMinutes(mins: number): void {
    this.breakLength.setValue(mins);
  }

  private addActivity(activity: string): void {
    let content: string = this.activities.value;
    if (content.length > 0) {
      this.activities.setValue(content + ' ' + activity);
    } else {
      this.activities.setValue(activity);
    }
  }

  private onSubmit(): void {
    let formValid: boolean = this.timeTrackerForm.valid;
    let userLoggedIn: boolean = this.loginService.isCurrentlyUserLoggedIn();

    if (formValid && userLoggedIn) {
      this.createWorkSession();
      if (!this.submitData()) {
        return;
      }
      this.successAnimation();
      this.setInitialValues();
      console.log(`Form Submitted! Project: ${this.workSession.toString()}`);
    } else if (!formValid) {
      this.failAnimation("Submit Failed: Form is invalid");
      console.log("Form wasn't submitted, because isn't valid");
    } else if (!userLoggedIn) {
      this.failAnimation("Submit Failed: No user is logged in");
    }
  }

  private createWorkSession(): void {
    this.workSession = new WorkSession(
      this.idService.getNextId(),
      this.loginService.user.toString(),
      this.project.value,
      this.start.value,
      this.end.value,
      +this.breakLength.value,
      this.activities.value);
  }

  private submitData(): boolean{
    this.wsService.addWorkSession(this.workSession)
      .catch((err: HttpErrorResponse) => {
      this.errorHandling(err);
      return false;
      });
    return true;
  }

  private errorHandling(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      this.failAnimation("Network is not available at the moment. Time for a coffee :)");
      console.log('An error occurred:', err.error.message);
    } else {
      this.failAnimation(`Backend returned code ${err.status}, body was: ${err.error}`);
      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
  }

  private successAnimation(): void {
    let submitSuccessStart: SubmitEvent = {
      submitSuccess: true,
      submitFail: false,
      animationStart: true,
      animationEnd: false
    };
    this.indicateService.feedObservableWithSubmitEvent(submitSuccessStart);

    setTimeout(() => {
      let submitSuccessEnd: SubmitEvent = {
        submitSuccess: true,
        submitFail: false,
        animationStart: false,
        animationEnd: true
      };
      this.indicateService.feedObservableWithSubmitEvent(submitSuccessEnd);
    }, 5000);
  }

  private failAnimation(failMsg: string): void {
    let submitFailStart: SubmitEvent = {
      submitSuccess: false,
      submitFail: true,
      animationStart: true,
      animationEnd: false,
      failMsg: failMsg
    };
    this.indicateService.feedObservableWithSubmitEvent(submitFailStart);

    setTimeout(() => {
      let submitFailEnd: SubmitEvent = {
        submitSuccess: false,
        submitFail: true,
        animationStart: false,
        animationEnd: true
      };
      this.indicateService.feedObservableWithSubmitEvent(submitFailEnd);
    }, 5000);
  }
}

