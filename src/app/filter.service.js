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
var rxjs_1 = require("rxjs");
var form_date_converter_1 = require("./form-date-converter");
var FilterService = (function () {
    function FilterService() {
        console.warn("WSService_Start");
    }
    FilterService.prototype.getEntities = function (entityName, workSessions) {
        return rxjs_1.Observable.from(workSessions)
            .map(function (workSession) { return workSession[entityName]; })
            .toArray()
            .map(function (entityArray) { return new Set(entityArray); })
            .map(function (entitySet) { return Array.from(entitySet.values()); })
            .retry(2)
            .toPromise()
            .catch(function (error) { return console.log(error); });
    };
    FilterService.prototype.filterEntities = function (filterData, workSessions) {
        return rxjs_1.Observable.from(workSessions)
            .do(function (ws) {
            console.log(form_date_converter_1.FormDateConverter.getToDayCuttedInstant(ws[filterData.end.entity]));
            console.log(ws[filterData.end.entity]);
            console.log(new Date(form_date_converter_1.FormDateConverter.getToDayCuttedInstant(ws[filterData.end.entity])).getTime());
        })
            .filter(function (ws) { return !filterData.employee.filter
            || ws[filterData.employee.entity] === filterData.employee.filter; })
            .filter(function (ws) { return !filterData.project.filter
            || ws[filterData.project.entity] === filterData.project.filter; })
            .filter(function (ws) { return !filterData.start.filter
            || form_date_converter_1.FormDateConverter.getToDayCuttedInstant(ws[filterData.end.entity]) >= filterData.start.filter; })
            .filter(function (ws) { return !filterData.end.filter
            || form_date_converter_1.FormDateConverter.getToDayCuttedInstant(ws[filterData.start.entity]) <= filterData.end.filter; })
            .toArray()
            .toPromise();
    };
    return FilterService;
}());
FilterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FilterService);
exports.FilterService = FilterService;
//# sourceMappingURL=filter.service.js.map