import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { reducers, metaReducers } from './core.state';
import { AuthEffects } from './auth/auth.effects';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LogadoComponent } from './components/logado/logado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { httpInterceptorProviders } from './http-interceptors';
import { LocalStorageService } from './local-storage/local-storage.service';
import { CustomSerializer } from './router/custom-serializer';

@NgModule({
  declarations: [
    FooterComponent,
    LogadoComponent,
    LoginComponent,
    NavbarComponent
  ],
  exports: [LogadoComponent, LoginComponent],
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDropdownModule,
    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AuthEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    // effects
    AuthEffects,

    //
    AuthGuard,
    AuthService,
    LocalStorageService,
    httpInterceptorProviders,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
