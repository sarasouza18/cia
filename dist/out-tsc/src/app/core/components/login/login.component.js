var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginAction } from '@core/auth/auth.actions';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.form = this.fb.group({
            username: null,
            password: null
        });
        this.destroyed$ = new Subject();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticating$ = this.store
            .select(function (state) { return state.auth.authenticating; })
            .pipe(takeUntil(this.destroyed$));
        this.authenticating$
            .pipe(takeUntil(this.destroyed$), tap(function (authenticating) {
            if (authenticating) {
                _this.form.disable();
            }
            else {
                _this.form.enable();
            }
        }))
            .subscribe();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
    };
    LoginComponent.prototype.onLogin = function () {
        this.store.dispatch(new LoginAction(this.form.value));
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder, Store])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map