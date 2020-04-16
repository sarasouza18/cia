var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
    CoreModule = __decorate([
        NgModule({
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
                // ngrx
                StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
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
        }),
        __param(0, Optional()),
        __param(0, SkipSelf()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=core.module.js.map