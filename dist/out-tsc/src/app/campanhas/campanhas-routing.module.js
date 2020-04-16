var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';
export var routes = [
    { path: '', component: SearchComponent },
    { path: ':id', component: FormComponent }
];
var CampanhasRoutingModule = /** @class */ (function () {
    function CampanhasRoutingModule() {
    }
    CampanhasRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], CampanhasRoutingModule);
    return CampanhasRoutingModule;
}());
export { CampanhasRoutingModule };
//# sourceMappingURL=campanhas-routing.module.js.map