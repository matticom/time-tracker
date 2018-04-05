import { TestBed, inject } from '@angular/core/testing';

import { MockLoginService } from './mock-login.service';

xdescribe('MockLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockLoginService]
    });
  });

  it('should be created', inject([MockLoginService], (service: MockLoginService) => {
    expect(service).toBeTruthy();
  }));
});
