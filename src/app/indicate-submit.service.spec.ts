import { TestBed, inject } from '@angular/core/testing';

import { IndicateSubmitService } from './indicate-submit.service';

xdescribe('IndicateSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicateSubmitService]
    });
  });

  it('should be created', inject([IndicateSubmitService], (service: IndicateSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
