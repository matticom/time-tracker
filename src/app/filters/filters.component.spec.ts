import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {WorkSessionsService} from '../work-sessions.service';
import {FiltersComponent} from './filters.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FilterService} from '../filter.service';
import {WorkSession} from '../workSession';

class WorkSessionsServiceStub {
  networkError: Error = new Error('Network Error');
  getWorkSessions(): Promise<WorkSession[]> {
    return Promise.reject(new HttpErrorResponse({
      error: this.networkError,
      headers: new HttpHeaders(),
      status: 12345,
      statusText: 'networkError',
      url: 'api/times',
    }));
  }
}

describe('FiltersComponent Error Handling should start', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;
  let wsService: WorkSessionsService;
  let filterService: FilterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FiltersComponent],
      providers: [ {provide: WorkSessionsService, useClass: WorkSessionsServiceStub },
        FilterService]
    }).compileComponents();
  }));

  beforeEach( () => {
      fixture = TestBed.createComponent(FiltersComponent);
      component = fixture.componentInstance;

      // WorkSessionsService actually injected into the component
      wsService = fixture.debugElement.injector.get(WorkSessionsService);

      filterService = fixture.debugElement.injector.get(FilterService);
    }
  );


  it('should handle network error and get error status', fakeAsync(() => {
    fixture.detectChanges();
    component.ngOnInit();
    tick();                  // wait for async getQuote
    // fixture.detectChanges(); // update view with quote
    expect(component.test).toBe('12345');
  }));
});
