import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { DetailsFailComponent } from './details-fail/details-fail.component';

export const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: ':id', component: FormComponent },
  { path: ':id/details', component: DetailsComponent },
  { path: ':id/details-fail', component: DetailsFailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampanhasRoutingModule {}
