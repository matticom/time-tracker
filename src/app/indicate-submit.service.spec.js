"use strict";
var testing_1 = require("@angular/core/testing");
var indicate_submit_service_1 = require("./indicate-submit.service");
xdescribe('IndicateSubmitService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [indicate_submit_service_1.IndicateSubmitService]
        });
    });
    it('should be created', testing_1.inject([indicate_submit_service_1.IndicateSubmitService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=indicate-submit.service.spec.js.map