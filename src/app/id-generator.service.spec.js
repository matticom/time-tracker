"use strict";
var testing_1 = require("@angular/core/testing");
var id_generator_service_1 = require("./id-generator.service");
xdescribe('IdGeneratorService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [id_generator_service_1.IdGeneratorService]
        });
    });
    it('should be created', testing_1.inject([id_generator_service_1.IdGeneratorService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=id-generator.service.spec.js.map