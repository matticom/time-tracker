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
var animations_1 = require("@angular/animations");
var indicate_submit_service_1 = require("../indicate-submit.service");
var AnimationComponent = (function () {
    function AnimationComponent(indicateService) {
        this.indicateService = indicateService;
        this.state = 'fadeIn';
        this.adviceText = "make component visible";
        this.success = true;
    }
    AnimationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.indicateService
            .getPreparedObservable()
            .subscribe(function (submitEvent) { return _this.performSubmitAnimation(submitEvent); });
    };
    AnimationComponent.prototype.ngOnChanges = function () {
        if (this.animationCommand.login) {
            this.success = true;
            this.adviceText = "Login successful";
            if (this.animationCommand.animationStart) {
                this.state = 'fadeOut';
            }
            else {
                this.state = 'fadeIn';
            }
        }
        if (this.animationCommand.logout) {
            this.success = true;
            this.adviceText = "Logout successful";
            if (this.animationCommand.animationStart) {
                this.state = 'fadeOut';
            }
            else {
                this.state = 'fadeIn';
            }
        }
    };
    AnimationComponent.prototype.performSubmitAnimation = function (submitEvent) {
        if (submitEvent.submitSuccess) {
            this.success = true;
            this.adviceText = "Submit successful";
            if (submitEvent.animationStart) {
                this.state = 'fadeOut';
            }
            else {
                this.state = 'fadeIn';
            }
        }
        if (submitEvent.submitFail) {
            this.success = false;
            if (submitEvent.animationStart) {
                this.adviceText = submitEvent.failMsg;
                this.state = 'fadeOut';
            }
            else {
                this.state = 'fadeIn';
            }
        }
    };
    return AnimationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AnimationComponent.prototype, "animationCommand", void 0);
AnimationComponent = __decorate([
    core_1.Component({
        selector: 'app-animation',
        templateUrl: './animation.component.html',
        styleUrls: ['./animation.component.css'],
        animations: [
            animations_1.trigger('myAwesomeAnimation', [
                animations_1.state('fadeIn', animations_1.style({
                    transform: 'scale(0)',
                })),
                animations_1.state('fadeOut', animations_1.style({
                    transform: 'scale(1)',
                })),
                animations_1.transition('fadeIn => fadeOut', animations_1.animate('300ms ease-in', animations_1.keyframes([
                    animations_1.style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
                    animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
                ]))),
                animations_1.transition('fadeOut => fadeIn', animations_1.animate('3000ms ease-out', animations_1.keyframes([
                    animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                    animations_1.style({ opacity: 0, transform: 'translateY(-100%)', offset: 1.0 })
                ]))),
            ]),
        ]
    }),
    __metadata("design:paramtypes", [indicate_submit_service_1.IndicateSubmitService])
], AnimationComponent);
exports.AnimationComponent = AnimationComponent;
//# sourceMappingURL=animation.component.js.map