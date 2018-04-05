"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var time_tracker_in_mem_db_service_1 = require("./time-tracker-in-mem-db.service");
var app_component_1 = require("./app.component");
var workSession_form_component_1 = require("./workSession-form.component");
var workSession_navbar_component_1 = require("./workSession-navbar.component");
var clean_pipe_1 = require("./clean.pipe");
var simpleService_1 = require("./simpleService");
var http_promise_component_1 = require("./http-promise.component");
var http_search_promise_service_1 = require("./http-search-promise-service");
var http_observable_component_1 = require("./http-observable.component");
var http_search_observable_service_1 = require("./http-search-observable-service");
var http_2 = require("@angular/http");
var route_header_component_1 = require("./route-header.component");
var route_home_component_1 = require("./route-home.component");
var route_frame_component_1 = require("./route-frame.component");
var router_1 = require("@angular/router");
var route_albumlist_component_1 = require("./route-albumlist.component");
var route_artist_component_1 = require("./route-artist.component");
var route_tracklist_component_1 = require("./route-tracklist.component");
var route_guard_always_auth_service_1 = require("./route-guard-always-auth.service");
var route_guard_user_service_1 = require("./route-guard-user.service");
var route_guard_only_loggedIn_user_service_1 = require("./route-guard-only-loggedIn-user.service");
var route_guard_children_always_auth_service_1 = require("./route-guard-children-always-auth.service");
var route_guard_children_only_loggedIn_user_service_1 = require("./route-guard-children-only-loggedIn-user.service");
var route_guard_unsearch_term_service_1 = require("./route-guard-unsearch-term.service");
var route_url_save_service_1 = require("./route-url-save.service");
var route_videolist_component_1 = require("./route-videolist.component");
var mock_login_service_1 = require("./mock-login.service");
var animations_1 = require("@angular/platform-browser/animations");
var animation_component_1 = require("./animation/animation.component");
var work_sessions_service_1 = require("./work-sessions.service");
var worksession_listing_component_1 = require("./worksession-listing/worksession-listing.component");
var id_generator_service_1 = require("./id-generator.service");
var indicate_submit_service_1 = require("./indicate-submit.service");
var filters_component_1 = require("./filters/filters.component");
var filter_service_1 = require("./filter.service");
// export const MAX_JOKES_TOKEN = new InjectionToken<number>("Max Jokes");
var routes = [
    { path: '', redirectTo: 'form', pathMatch: 'full' },
    { path: 'listing', component: worksession_listing_component_1.WorksessionListingComponent },
    { path: 'form', component: workSession_form_component_1.WorkSessionFormComponent },
    { path: 'find', redirectTo: 'search' },
    { path: 'home', component: route_home_component_1.RouteHomeComponent },
    { path: 'search', component: http_promise_component_1.HttpPromiseComponent,
        canDeactivate: [route_guard_unsearch_term_service_1.RouteGuardUnsearchTermService] },
    // {path: 'search/:term', component: HttpPromiseComponent},
    {
        path: 'artist/:artistId',
        component: route_artist_component_1.RouteArtistComponent,
        canActivate: [route_guard_always_auth_service_1.RouteGuardAlwaysAuthService, route_guard_only_loggedIn_user_service_1.RouteGuardOnlyLoggedInUserService],
        canActivateChild: [route_guard_children_always_auth_service_1.RouteGuardChildrenAlwaysAuthService],
        children: [
            { path: '', redirectTo: 'tracks', pathMatch: 'full' },
            { path: 'tracks', component: route_tracklist_component_1.RouteTracklistComponent },
            { path: 'albums', component: route_albumlist_component_1.RouteAlbumlistComponent },
            { path: 'videos', component: route_videolist_component_1.RouteVideolistComponent },
        ]
    },
    { path: '**', component: route_home_component_1.RouteHomeComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpClientModule,
            http_2.JsonpModule,
            router_1.RouterModule.forRoot(routes, { useHash: true }),
            angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(time_tracker_in_mem_db_service_1.TimeTrackerInMemDbService),
            animations_1.BrowserAnimationsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            workSession_form_component_1.WorkSessionFormComponent,
            workSession_navbar_component_1.WorkSessionNavbarComponent,
            // CarouselDisplayComponent,
            // CarouselItemComponent,
            // CarouselComponent,
            // StructuralDirsComponent,
            // CardHoverDirective,
            // RolloverDirective,
            clean_pipe_1.CleanPipe,
            animation_component_1.AnimationComponent,
            // ModelDrivenFormComponent,
            // ReactiveModelFormComponent,
            // TemplateDrivenFormComponent,
            // ParentComponent,
            // ChildComponent,
            // JokeComponent,
            // JokeFormComponent,
            // JokeListComponent,
            // HttpDemoComponent,
            http_promise_component_1.HttpPromiseComponent,
            http_observable_component_1.HttpObservableComponent,
            route_header_component_1.RouteHeaderComponent,
            route_home_component_1.RouteHomeComponent,
            route_frame_component_1.RouteFrameComponent,
            route_albumlist_component_1.RouteAlbumlistComponent,
            route_artist_component_1.RouteArtistComponent,
            route_tracklist_component_1.RouteTracklistComponent,
            route_videolist_component_1.RouteVideolistComponent,
            worksession_listing_component_1.WorksessionListingComponent,
            filters_component_1.FiltersComponent,
        ],
        providers: [simpleService_1.SimpleService,
            { provide: 'MAX_JOKES_TOKEN', useValue: 3 },
            http_search_promise_service_1.HttpSearchPromiseService,
            http_search_observable_service_1.HttpSearchObservableService,
            route_guard_always_auth_service_1.RouteGuardAlwaysAuthService,
            route_guard_user_service_1.RouteGuardUserService,
            route_guard_only_loggedIn_user_service_1.RouteGuardOnlyLoggedInUserService,
            route_guard_children_always_auth_service_1.RouteGuardChildrenAlwaysAuthService,
            route_guard_children_only_loggedIn_user_service_1.RouteGuardChildrenOnlyLoggedInUserService,
            route_guard_unsearch_term_service_1.RouteGuardUnsearchTermService,
            route_url_save_service_1.RouteUrlSaveService,
            { provide: 'RequiredDomain', useValue: 'example.com' },
            mock_login_service_1.MockLoginService,
            work_sessions_service_1.WorkSessionsService,
            id_generator_service_1.IdGeneratorService,
            indicate_submit_service_1.IndicateSubmitService,
            filter_service_1.FilterService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map