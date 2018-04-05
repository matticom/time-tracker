/// <reference path="../../typings/index.d.ts"/>
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
var workSession_1 = require("../workSession");
var forms_1 = require("@angular/forms");
var validator_1 = require("../validator");
var form_date_converter_1 = require("../form-date-converter");
var mock_login_service_1 = require("../mock-login.service");
var id_generator_service_1 = require("../id-generator.service");
var work_sessions_service_1 = require("../work-sessions.service");
var indicate_submit_service_1 = require("../indicate-submit.service");
var router_1 = require("@angular/router");
var WorkSessionFormComponent = (function () {
    function WorkSessionFormComponent(loginService, idService, wsService, indicateService, router) {
        this.loginService = loginService;
        this.idService = idService;
        this.wsService = wsService;
        this.indicateService = indicateService;
        this.router = router;
        this.serviceInterfaceRetrieveData();
        this.minYear = new Date().getFullYear() - 1;
    }
    WorkSessionFormComponent.prototype.serviceInterfaceRetrieveData = function () {
        // ToDo: Service für Daten implementieren
        this.projects = ['project1', 'project2',
            'project3', 'project4'];
    };
    WorkSessionFormComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
        this.setInitialValues();
    };
    WorkSessionFormComponent.prototype.createFormControls = function () {
        this.project = new forms_1.FormControl('', forms_1.Validators.required);
        this.start = new forms_1.FormControl('', [forms_1.Validators.required,
            validator_1.DateValidators.earliestChoosableYear(this.minYear)]);
        this.end = new forms_1.FormControl('');
        this.breakLength = new forms_1.FormControl('');
        this.activities = new forms_1.FormControl('');
    };
    WorkSessionFormComponent.prototype.createForm = function () {
        this.timeTrackerForm = new forms_1.FormGroup({
            project: this.project,
            start: this.start,
            end: this.end,
            breakLength: this.breakLength,
            activities: this.activities
        });
        this.timeTrackerForm.setValidators(validator_1.DateValidators.startGTend());
    };
    WorkSessionFormComponent.prototype.setInitialValues = function () {
        this.project.setValue(this.projects[0]);
        var now = new Date();
        this.start.setValue(form_date_converter_1.FormDateConverter.toFormDate(now));
        this.end.setValue(this.addHoursToStart(this.start.value, 8));
        this.breakLength.setValue(30);
    };
    WorkSessionFormComponent.prototype.addHoursToStart = function (start, hours) {
        var local = form_date_converter_1.FormDateConverter.toJsDate(start);
        local.setHours(local.getHours() + hours);
        return form_date_converter_1.FormDateConverter.toFormDate(local);
    };
    WorkSessionFormComponent.prototype.setPreselectedMinutes = function (mins) {
        this.breakLength.setValue(mins);
    };
    WorkSessionFormComponent.prototype.addActivity = function (activity) {
        var content = this.activities.value;
        if (content.length > 0) {
            this.activities.setValue(content + ' ' + activity);
        }
        else {
            this.activities.setValue(activity);
        }
    };
    WorkSessionFormComponent.prototype.onSubmit = function () {
        var formValid = this.timeTrackerForm.valid;
        var userLoggedIn = this.loginService.isCurrentlyUserLoggedIn();
        if (formValid && userLoggedIn) {
            this.createWorkSession();
            if (!this.submitData())
                return;
            this.successAnimation();
            this.setInitialValues();
            console.log("Form Submitted! Project: " + this.workSession.toString());
        }
        else if (!formValid) {
            this.failAnimation("Submit Failed: Form is invalid");
            console.log("Form wasn't submitted, because isn't valid");
        }
        else if (!userLoggedIn) {
            this.failAnimation("Submit Failed: No user is logged in");
        }
    };
    WorkSessionFormComponent.prototype.createWorkSession = function () {
        this.workSession = new workSession_1.WorkSession(this.idService.getNextId(), this.loginService.user.toString(), this.project.value, this.start.value, this.end.value, +this.breakLength.value, this.activities.value);
    };
    WorkSessionFormComponent.prototype.submitData = function () {
        var _this = this;
        this.wsService.addWorkSession(this.workSession)
            .catch(function (err) {
            _this.errorHandling(err);
            return false;
        });
        return true;
    };
    WorkSessionFormComponent.prototype.errorHandling = function (err) {
        if (err.error instanceof Error) {
            this.failAnimation("Network is not available at the moment. Time for a coffee :)");
            console.log('An error occurred:', err.error.message);
        }
        else {
            this.failAnimation("Backend returned code " + err.status + ", body was: " + err.error);
            console.log("Backend returned code " + err.status + ", body was: " + err.error);
        }
    };
    WorkSessionFormComponent.prototype.successAnimation = function () {
        var _this = this;
        var submitSuccessStart = {
            submitSuccess: true,
            submitFail: false,
            animationStart: true,
            animationEnd: false
        };
        this.indicateService.feedObservableWithSubmitEvent(submitSuccessStart);
        setTimeout(function () {
            var submitSuccessEnd = {
                submitSuccess: true,
                submitFail: false,
                animationStart: false,
                animationEnd: true
            };
            _this.indicateService.feedObservableWithSubmitEvent(submitSuccessEnd);
        }, 5000);
    };
    WorkSessionFormComponent.prototype.failAnimation = function (failMsg) {
        var _this = this;
        var submitFailStart = {
            submitSuccess: false,
            submitFail: true,
            animationStart: true,
            animationEnd: false,
            failMsg: failMsg
        };
        this.indicateService.feedObservableWithSubmitEvent(submitFailStart);
        setTimeout(function () {
            var submitFailEnd = {
                submitSuccess: false,
                submitFail: true,
                animationStart: false,
                animationEnd: true
            };
            _this.indicateService.feedObservableWithSubmitEvent(submitFailEnd);
        }, 5000);
    };
    return WorkSessionFormComponent;
}());
WorkSessionFormComponent = __decorate([
    core_1.Component({
        selector: 'ws-form',
        templateUrl: './workSession-form.component.html'
    }),
    __metadata("design:paramtypes", [mock_login_service_1.MockLoginService,
        id_generator_service_1.IdGeneratorService,
        work_sessions_service_1.WorkSessionsService,
        indicate_submit_service_1.IndicateSubmitService,
        router_1.Router])
], WorkSessionFormComponent);
exports.WorkSessionFormComponent = WorkSessionFormComponent;
//# sourceMappingURL=workSession-form.component.js.map
