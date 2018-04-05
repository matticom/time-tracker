"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var mock_login_service_1 = require("../mock-login.service");
require("rxjs/Rx");
var WorkSessionNavbarComponent = (function () {
    function WorkSessionNavbarComponent(loginService) {
        this.loginService = loginService;
        this.submit = new core_1.EventEmitter();
    }
    WorkSessionNavbarComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    WorkSessionNavbarComponent.prototype.createFormControls = function () {
        this.password = new forms_1.FormControl();
        this.email = new forms_1.FormControl();
    };
    WorkSessionNavbarComponent.prototype.createForm = function () {
        this.loginForm = new forms_1.FormGroup({
            password: this.password,
            email: this.email
        });
    };
    WorkSessionNavbarComponent.prototype.login = function () {
        // this.loggedUser = this.loginService.login(this.email.value, this.password.value);
        // Service wird mit fixen Daten gefüttert um Login optisch zu testen
        this.loggedUser = this.loginService.login("test@test.de", "test");
        this.loginAnimation();
    };
    WorkSessionNavbarComponent.prototype.logout = function () {
        if (this.loginService.logout(this.loggedUser)) {
            this.loggedUser = null;
        }
        this.logoutAnimation();
    };
    WorkSessionNavbarComponent.prototype.loginAnimation = function () {
        var _this = this;
        var loginStart = {
            login: true,
            logout: false,
            animationStart: true,
            animationEnd: false
        };
        this.submit.emit(loginStart);
        setTimeout(function () {
            var loginEnd = {
                login: true,
                logout: false,
                animationStart: false,
                animationEnd: true
            };
            _this.submit.emit(loginEnd);
        }, 1000);
    };
    WorkSessionNavbarComponent.prototype.logoutAnimation = function () {
        var _this = this;
        var logoutStart = {
            login: false,
            logout: true,
            animationStart: true,
            animationEnd: false
        };
        this.submit.emit(logoutStart);
        setTimeout(function () {
            var logoutStart = {
                login: false,
                logout: true,
                animationStart: false,
                animationEnd: true
            };
            _this.submit.emit(logoutStart);
        }, 1000);
    };
    return WorkSessionNavbarComponent;
}());
__decorate([
    core_1.Output('login'),
    __metadata("design:type", Object)
], WorkSessionNavbarComponent.prototype, "submit", void 0);
WorkSessionNavbarComponent = __decorate([
    core_1.Component({
        selector: 'ws-navbar',
        templateUrl: './workSession-navbar.component.html'
    }),
    __metadata("design:paramtypes", [mock_login_service_1.MockLoginService])
], WorkSessionNavbarComponent);
exports.WorkSessionNavbarComponent = WorkSessionNavbarComponent;
//# sourceMappingURL=workSession-navbar.component.js.map
