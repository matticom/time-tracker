
import {Component, OnInit} from '@angular/core';
import {UserAuth} from './user-auth.interface';



@Component({
  selector: 'my-app',
  template: `
    <ws-navbar (login)="performAnimation($event)"></ws-navbar>
    <app-animation [animationCommand]="userAuth"></app-animation>
    <router-outlet></router-outlet>
    
    <!--<times></times>-->
    <!--<ws-form></ws-form>-->
    
    <!--<carousel></carousel>-->
    <!--<structural-dirs></structural-dirs>-->
    <!--<ws-form></ws-form>-->
    <!--<modelDrivenForm></modelDrivenForm>-->
    <!--<reactiveModelForm></reactiveModelForm>-->
    <!--<templateDrivenForm></templateDrivenForm>-->
    <!--<httpDemo></httpDemo>-->
    <!--<httpPromise></httpPromise>-->
    <!--<httpObservable></httpObservable>-->
  <!--<route-frame></route-frame>-->
  
  <!--<div class="row">-->
    <!--<div class="col-xs-6">-->
      <!--<parent><child></child></parent>-->
    <!--</div>-->
    <!--<div class="col-xs-6">-->
      <!--<parent><child></child></parent>-->
    <!--</div>-->
  <!--</div>-->
  <!--<joke-list></joke-list>-->
  `
})
export class AppComponent implements OnInit {

  userAuth: UserAuth;

  ngOnInit(): void {
    this.userAuth = {login: false, logout: false, animationStart: false, animationEnd: false};
  }

  performAnimation(userAuth: UserAuth){
    this.userAuth = userAuth;
  }
}
