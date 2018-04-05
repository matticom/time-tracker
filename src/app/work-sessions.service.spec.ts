import { TestBed, inject } from '@angular/core/testing';

import { WorkSessionsService } from './work-sessions.service';

xdescribe('WorkSessionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkSessionsService]
    });
  });

  it('should be created', inject([WorkSessionsService], (service: WorkSessionsService) => {
    expect(service).toBeTruthy();
  }));
});
