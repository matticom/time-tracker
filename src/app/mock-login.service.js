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
var mockUser_1 = require("./mockUser");
var MockLoginService = (function () {
    function MockLoginService() {
    }
    MockLoginService.prototype.login = function (email, password) {
        if (email === "test@test.de" && password === "test") {
            this.user = new mockUser_1.MockUser(email, password);
            return this.user;
        }
        else {
            return null;
        }
    };
    MockLoginService.prototype.logout = function (user) {
        if (user) {
            this.user = null;
            return true;
        }
        else {
            return false;
        }
    };
    MockLoginService.prototype.isCurrentlyUserLoggedIn = function () {
        if (this.user) {
            return true;
        }
        else {
            return false;
        }
    };
    return MockLoginService;
}());
MockLoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MockLoginService);
exports.MockLoginService = MockLoginService;
//# sourceMappingURL=mock-login.service.js.map