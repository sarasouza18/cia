var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAuthState } from '../core.state';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { AuthActionTypes, LoginSuccessAction, LoginFailAction } from './auth.actions';
import { AuthService } from './auth.service';
var AuthEffects = /** @class */ (function () {
    function AuthEffects(store, actions$, authService, localStorageService, router) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.router = router;
        this.login$ = this.actions$.pipe(ofType(AuthActionTypes.LOGIN), mergeMap(function (action) {
            return _this.authService.login(action.payload).pipe(tap(function () { return _this.router.navigateByUrl('/'); }), map(function (data) { return new LoginSuccessAction(data); }), catchError(function (message) { return of(new LoginFailAction(message)); }));
        }));
        this.redirect$ = this.actions$.pipe(ofType(AuthActionTypes.LOGOUT), tap(function () { return _this.router.navigateByUrl('/login'); }));
        this.storeAuth$ = this.actions$.pipe(ofType(AuthActionTypes.LOGIN_SUCCESS, AuthActionTypes.LOGIN_FAIL, AuthActionTypes.LOGOUT), switchMap(function () { return _this.store.select(selectAuthState); }), tap(function (auth) { return _this.localStorageService.setItem('auth', auth); }));
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], AuthEffects.prototype, "login$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "redirect$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "storeAuth$", void 0);
    AuthEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Store,
            Actions,
            AuthService,
            LocalStorageService,
            Router])
    ], AuthEffects);
    return AuthEffects;
}());
export { AuthEffects };
//# sourceMappingURL=auth.effects.js.map