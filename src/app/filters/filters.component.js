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
var filter_service_1 = require("../filter.service");
var forms_1 = require("@angular/forms");
var validator_1 = require("../validator");
var work_sessions_service_1 = require("../work-sessions.service");
var FiltersComponent = (function () {
    function FiltersComponent(filterService, wsService) {
        this.filterService = filterService;
        this.wsService = wsService;
        this.httpError = new core_1.EventEmitter();
        this.employeeEntity = 'employee';
        this.projectEntity = 'project';
        this.startEntity = 'start';
        this.endEntity = 'end';
        this.filterData = {
            employee: { entity: this.employeeEntity },
            project: { entity: this.projectEntity },
            start: { entity: this.startEntity },
            end: { entity: this.endEntity }
        };
    }
    FiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("OnInit");
        this.createFormControls();
        this.createForm();
        this.getWorkSessions();
        this.filterForm.valueChanges.do(function () { return _this.filterWS(); }).subscribe();
    };
    FiltersComponent.prototype.createFormControls = function () {
        this.employeeFC = new forms_1.FormControl('');
        this.projectFC = new forms_1.FormControl('');
        this.startFC = new forms_1.FormControl('');
        this.endFC = new forms_1.FormControl('');
    };
    FiltersComponent.prototype.createForm = function () {
        this.filterForm = new forms_1.FormGroup({
            employee: this.employeeFC,
            project: this.projectFC,
            start: this.startFC,
            end: this.endFC
        }, validator_1.DateValidators.startGTend());
    };
    FiltersComponent.prototype.filterWS = function () {
        var _this = this;
        this.filterData = {
            employee: { entity: this.employeeEntity, filter: this.employeeFC.value },
            project: { entity: this.projectEntity, filter: this.projectFC.value },
            start: { entity: this.startEntity, filter: new Date(this.startFC.value).getTime() },
            end: { entity: this.endEntity, filter: new Date(this.endFC.value).getTime() }
        };
        this.filterService.filterEntities(this.filterData, this.workSessions)
            .then(function (filteredWS) { return _this.filteredWorkSessions = filteredWS; });
    };
    FiltersComponent.prototype.getEntities = function () {
        var _this = this;
        this.filterService.getEntities('employee', this.workSessions)
            .then(function (employees) { return _this.employees = employees; });
        this.filterService.getEntities('project', this.workSessions)
            .then(function (projects) { return _this.projects = projects; });
    };
    FiltersComponent.prototype.getWorkSessions = function () {
        var _this = this;
        this.wsService.getWorkSessions()
            .then(function (wSessions) {
            _this.successfulResponse(wSessions);
        }, function (err) {
            _this.errorHandling(err);
        });
    };
    FiltersComponent.prototype.successfulResponse = function (workSessions) {
        this.httpError.emit("");
        this.workSessions = workSessions;
        this.getEntities();
        this.filteredWorkSessions = workSessions;
    };
    FiltersComponent.prototype.errorHandling = function (err) {
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            this.httpError.emit("Network is not available at the moment. Time for a coffee :)");
            this.test = err.status.toString();
            console.log('An error occurred:', err.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            this.httpError.emit("Backend returned code " + err.status + ", body was: " + err.error);
            console.log(this.httpError);
        }
    };
    return FiltersComponent;
}());
__decorate([
    core_1.Output('http-error'),
    __metadata("design:type", Object)
], FiltersComponent.prototype, "httpError", void 0);
FiltersComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'filters',
        templateUrl: './filters.component.html'
    }),
    __metadata("design:paramtypes", [filter_service_1.FilterService,
        work_sessions_service_1.WorkSessionsService])
], FiltersComponent);
exports.FiltersComponent = FiltersComponent;
//# sourceMappingURL=filters.component.js.map