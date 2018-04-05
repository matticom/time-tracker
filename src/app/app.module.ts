import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TimeTrackerInMemDbService} from './time-tracker-in-mem-db.service';
import {AppComponent} from './app.component';
import {WorkSessionFormComponent} from './worksession-form/workSession-form.component';
import {WorkSessionNavbarComponent} from './worksession-navbar/workSession-navbar.component';
import {MockLoginService} from './mock-login.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnimationComponent} from './animation/animation.component';
import {WorkSessionsService} from './work-sessions.service';
import {WorksessionListingComponent} from './worksession-listing/worksession-listing.component';
import {IdGeneratorService} from './id-generator.service';
import {IndicateSubmitService} from './indicate-submit.service';
import {FiltersComponent} from './filters/filters.component';
import {FilterService} from './filter.service';
import {AppRoutingModule} from "./app-routing/app-routing.module";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(TimeTrackerInMemDbService),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    WorkSessionFormComponent,
    WorkSessionNavbarComponent,
    AnimationComponent,
    WorksessionListingComponent,
    FiltersComponent,
  ],
  providers: [
    MockLoginService,
    WorkSessionsService,
    IdGeneratorService,
    IndicateSubmitService,
    FilterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
