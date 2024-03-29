var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@core/auth/auth.guard';
import { LoginComponent } from '@core/components/login/login.component';
import { LogadoComponent } from '@core/components/logado/logado.component';
var routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LogadoComponent,
        canActivate: [AuthGuard],
        children: [
            // {
            //   path: "",
            //   loadChildren: "./dashboard/dashboard.module#DashboardModule"
            // },
            {
                path: 'campanhas',
                loadChildren: './campanhas/campanhas.module#CampanhasModule'
            },
            // quando criar dash, redirecionar para dash
            { path: '**', redirectTo: 'campanhas' }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map