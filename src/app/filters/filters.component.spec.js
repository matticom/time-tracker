"use strict";
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var work_sessions_service_1 = require("../work-sessions.service");
var filters_component_1 = require("./filters.component");
var forms_1 = require("@angular/forms");
var filter_service_1 = require("../filter.service");
var WorkSessionsServiceStub = (function () {
    function WorkSessionsServiceStub() {
        this.networkError = new Error('Network Error');
        console.warn("Stub");
    }
    WorkSessionsServiceStub.prototype.getWorkSessions = function () {
        return Promise.reject(new http_1.HttpErrorResponse({
            error: this.networkError,
            headers: new http_1.HttpHeaders(),
            status: 12345,
            statusText: 'networkError',
            url: 'api/times',
        }));
    };
    return WorkSessionsServiceStub;
}());
describe('FiltersComponent Error Handling should start', function () {
    var component;
    var fixture;
    var wsService;
    var filterService;
    var spy;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.ReactiveFormsModule],
            declarations: [filters_component_1.FiltersComponent],
            providers: [{ provide: work_sessions_service_1.WorkSessionsService, useClass: WorkSessionsServiceStub },
                filter_service_1.FilterService]
        }).compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(filters_component_1.FiltersComponent);
            component = fixture.componentInstance;
            // WorkSessionsService actually injected into the component
            wsService = fixture.debugElement.injector.get(work_sessions_service_1.WorkSessionsService);
            filterService = fixture.debugElement.injector.get(filter_service_1.FilterService);
            // spy = spyOn(wsService, 'getWorkSessions')
            //   .and.returnValue(Promise.reject(new HttpErrorResponse({
            //     error: networkError,
            //     headers: new HttpHeaders(),
            //     status: 12345,
            //     statusText: 'networkError',
            //     url: 'api/times',
            //   })));
        });
    }));
    it('should handle network error and get error status', testing_1.fakeAsync(function () {
        fixture.detectChanges();
        component.ngOnInit();
        testing_1.tick(); // wait for async getQuote
        // fixture.detectChanges(); // update view with quote
        expect(component.test).toBe('12345');
    }));
});
//# sourceMappingURL=filters.component.spec.js.map