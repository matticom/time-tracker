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
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/http");
var WorkSessionsService = (function () {
    function WorkSessionsService(http) {
        this.http = http;
    }
    WorkSessionsService.prototype.getWorkSessions = function () {
        var url = 'api/times';
        return this.http.get(url)
            .map(function (response) { return response.data; })
            .retry(2)
            .toPromise();
    };
    WorkSessionsService.prototype.addWorkSession = function (session) {
        var url = 'api/times';
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        console.log(JSON.stringify(session.toObject()));
        return this.http
            .post(url, session.toObject(), headers)
            .retry(2)
            .toPromise()
            .then(function (response) { return response['data']; })
            .catch(function (error) { return console.log(error); });
    };
    return WorkSessionsService;
}());
WorkSessionsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], WorkSessionsService);
exports.WorkSessionsService = WorkSessionsService;
//# sourceMappingURL=work-sessions.service.js.map