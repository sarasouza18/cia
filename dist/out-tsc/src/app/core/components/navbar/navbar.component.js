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
import { Store } from '@ngrx/store';
import { LogoutAction } from '@core/auth/auth.actions';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(store) {
        this.store = store;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.sidebarToggle = function () {
        this.sidebarVisible = !this.sidebarVisible;
    };
    NavbarComponent.prototype.onLogout = function () {
        this.store.dispatch(new LogoutAction());
    };
    NavbarComponent = __decorate([
        Component({
            selector: 'cia-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
        }),
        __metadata("design:paramtypes", [Store])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map