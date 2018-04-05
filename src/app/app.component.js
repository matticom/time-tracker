"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userAuth = { login: false, logout: false, animationStart: false, animationEnd: false };
    };
    AppComponent.prototype.performAnimation = function (userAuth) {
        this.userAuth = userAuth;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "    \n    <ws-navbar (login)=\"performAnimation($event)\"></ws-navbar>\n    <app-animation [animationCommand]=\"userAuth\"></app-animation>\n    <router-outlet></router-outlet>\n    \n    <!--<times></times>-->\n    <!--<ws-form></ws-form>-->\n    \n    <!--<carousel></carousel>-->\n    <!--<structural-dirs></structural-dirs>-->\n    <!--<ws-form></ws-form>-->\n    <!--<modelDrivenForm></modelDrivenForm>-->\n    <!--<reactiveModelForm></reactiveModelForm>-->\n    <!--<templateDrivenForm></templateDrivenForm>-->\n    <!--<httpDemo></httpDemo>-->\n    <!--<httpPromise></httpPromise>-->\n    <!--<httpObservable></httpObservable>-->\n  <!--<route-frame></route-frame>-->\n  \n  <!--<div class=\"row\">-->\n    <!--<div class=\"col-xs-6\">-->\n      <!--<parent><child></child></parent>-->\n    <!--</div>-->\n    <!--<div class=\"col-xs-6\">-->\n      <!--<parent><child></child></parent>-->\n    <!--</div>-->\n  <!--</div>-->\n  <!--<joke-list></joke-list>-->\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map