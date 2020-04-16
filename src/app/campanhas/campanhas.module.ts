import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@shared/shared.module';
import { CampanhasRoutingModule } from './campanhas-routing.module';
import { FormComponent } from './form/form.component';
import { SearchComponent } from './search/search.component';
import { CampanhasService } from './campanhas.service';
import { campanhaReducer } from './campanhas.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CampanhasEffects } from './campanhas.effects';
import { DetailsComponent } from './details/details.component';
import { DetailsFailComponent } from './details-fail/details-fail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CampanhasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    StoreModule.forFeature('campanhas', campanhaReducer),
    EffectsModule.forFeature([CampanhasEffects])
  ],
  declarations: [
    SearchComponent,
    FormComponent,
    DetailsComponent,
    DetailsFailComponent
  ],
  providers: [CampanhasService]
})
export class CampanhasModule {}
