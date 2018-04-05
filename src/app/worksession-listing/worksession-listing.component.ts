import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'wsListing',
  template: `
    <div class="container">

      <!--error handling-->

      <div *ngIf="httpError">
        <h1 class="text-center text-secondary">
          {{httpError}}
        </h1>
      </div>
      <div *ngIf="!httpError">
        <filters (http-error)="forwardError($event)"></filters>
      </div>
    </div>
  `
})

export class WorksessionListingComponent implements OnInit {

  httpError: string;

  constructor() {
  }

  ngOnInit() {
    this.httpError = '';
  }

  public forwardError(httpError: string){
    this.httpError = httpError;
  }
}
