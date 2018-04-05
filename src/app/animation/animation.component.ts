import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {IndicateSubmitService} from '../indicate-submit.service';
import {SubmitEvent} from '../submit-event.interface';
import {UserAuth} from '../user-auth.interface';


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('fadeIn', style({
        transform: 'scale(0)',
      })),
      state('fadeOut', style({
        transform: 'scale(1)',
      })),
      transition('fadeIn => fadeOut', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(0)', offset: 0}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ]))),
      transition('fadeOut => fadeIn', animate('3000ms ease-out', keyframes([
        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
        style({opacity: 0, transform: 'translateY(-100%)',     offset: 1.0})
      ]))),
    ]),
  ]
})
export class AnimationComponent implements OnInit, OnChanges {

  @Input() animationCommand: UserAuth;
  private adviceText: string;
  private delay: number;
  private success: boolean;
  state: string;

  constructor(private indicateService: IndicateSubmitService) {
    this.state = 'fadeIn';
    this.adviceText = "make component visible";
    this.success = true;
  }

  ngOnInit() {
    this.indicateService
      .getPreparedObservable()
      .subscribe(
        submitEvent => this.performSubmitAnimation(submitEvent));
  }

  ngOnChanges() {
    if (this.animationCommand.login) {
      this.success = true;
      this.adviceText = "Login successful";
      if(this.animationCommand.animationStart){
        this.state = 'fadeOut';
      } else {
        this.state = 'fadeIn';
      }
    }

    if (this.animationCommand.logout) {
      this.success = true;
      this.adviceText = "Logout successful";
      if(this.animationCommand.animationStart){
        this.state = 'fadeOut';
      } else {
        this.state = 'fadeIn';
      }
    }
  }

  private performSubmitAnimation(submitEvent: SubmitEvent) {
    if (submitEvent.submitSuccess) {
      this.success = true;
      this.adviceText = "Submit successful";
      if(submitEvent.animationStart){
        this.state = 'fadeOut';
      } else {
        this.state = 'fadeIn';
      }
    }

    if (submitEvent.submitFail) {
      this.success = false;
      if(submitEvent.animationStart){
        this.adviceText = submitEvent.failMsg;
        this.state = 'fadeOut';
      } else {
        this.state = 'fadeIn';
      }
    }
  }

}
