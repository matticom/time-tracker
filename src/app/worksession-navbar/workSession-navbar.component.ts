import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MockLoginService} from '../mock-login.service';
import {MockUser} from '../mockUser';
import 'rxjs/Rx';
import {UserAuth} from '../user-auth.interface';

@Component({
  selector: 'ws-navbar',
  templateUrl: './workSession-navbar.component.html'
})

export class WorkSessionNavbarComponent implements OnInit {

  @Output('login') submit = new EventEmitter<UserAuth>();

  loginForm: FormGroup;
  password: FormControl;
  email: FormControl;
  loggedUser: MockUser;

  constructor(private loginService: MockLoginService) {}

  ngOnInit(){
    this.createFormControls();
    this.createForm();
  }

  private createFormControls(): void {
    this.password = new FormControl();
    this.email = new FormControl();
  }

  private createForm(): void {
    this.loginForm = new FormGroup({
      password: this.password,
      email: this.email
    });
  }

  login(): void {
    // this.loggedUser = this.loginService.login(this.email.value, this.password.value);
    // Service wird mit fixen Daten gefüttert um Login optisch zu testen
    this.loggedUser = this.loginService.login("test@test.de","test");
    this.loginAnimation();
  }

  logout(): void {
    if (this.loginService.logout(this.loggedUser)) {
      this.loggedUser = null;
    }
    this.logoutAnimation();
  }

  private loginAnimation(): void {
    let loginStart: UserAuth = {
      login: true,
      logout: false,
      animationStart: true,
      animationEnd: false
    };
    this.submit.emit(loginStart);

    setTimeout(() => {
      let loginEnd: UserAuth = {
        login: true,
        logout: false,
        animationStart: false,
        animationEnd: true
      };
      this.submit.emit(loginEnd);
    }, 1000);
  }

  private logoutAnimation(): void {
    let logoutStart: UserAuth = {
      login: false,
      logout: true,
      animationStart: true,
      animationEnd: false
    };
    this.submit.emit(logoutStart);

    setTimeout(() => {
      let logoutStart: UserAuth = {
        login: false,
        logout: true,
        animationStart: false,
        animationEnd: true
      };
      this.submit.emit(logoutStart);
    }, 1000);
  }
}
