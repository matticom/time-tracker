"use strict";
var testing_1 = require("@angular/core/testing");
var mock_login_service_1 = require("./mock-login.service");
xdescribe('MockLoginService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [mock_login_service_1.MockLoginService]
        });
    });
    it('should be created', testing_1.inject([mock_login_service_1.MockLoginService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=mock-login.service.spec.js.map