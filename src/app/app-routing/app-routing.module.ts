import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {WorksessionListingComponent} from "../worksession-listing/worksession-listing.component";
import {WorkSessionFormComponent} from "../worksession-form/workSession-form.component";

const routes: Routes = [
  {path: '', redirectTo: 'form', pathMatch: 'full'},
  {path: 'listing', component: WorksessionListingComponent},
  {path: 'form', component: WorkSessionFormComponent},
  {path: '**', redirectTo: 'form'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
