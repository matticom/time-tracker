"use strict";
var testing_1 = require("@angular/core/testing");
var work_sessions_service_1 = require("./work-sessions.service");
xdescribe('WorkSessionsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [work_sessions_service_1.WorkSessionsService]
        });
    });
    it('should be created', testing_1.inject([work_sessions_service_1.WorkSessionsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=work-sessions.service.spec.js.map