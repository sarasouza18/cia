(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./campanhas/campanhas.module": [
		"./src/app/campanhas/campanhas.module.ts",
		"campanhas-campanhas-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth/auth.guard */ "./src/app/core/auth/auth.guard.ts");
/* harmony import */ var _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/login/login.component */ "./src/app/core/components/login/login.component.ts");
/* harmony import */ var _core_components_logado_logado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/logado/logado.component */ "./src/app/core/components/logado/logado.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'login',
        component: _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: '',
        component: _core_components_logado_logado_component__WEBPACK_IMPORTED_MODULE_4__["LogadoComponent"],
        canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
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
            { path: '**', redirectTo: 'campanhas' },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n    <router-outlet></router-outlet>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            imports: [
                // angular
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                //
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.actions.ts ***!
  \*******************************************/
/*! exports provided: AuthActionTypes, LoginAction, LoginSuccessAction, LoginFailAction, LogoutAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAction", function() { return LoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccessAction", function() { return LoginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFailAction", function() { return LoginFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutAction", function() { return LogoutAction; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LOGIN"] = "[auth] login";
    AuthActionTypes["LOGIN_SUCCESS"] = "[auth] login success";
    AuthActionTypes["LOGIN_FAIL"] = "[auth] login fail";
    AuthActionTypes["LOGOUT"] = "[auth] logout";
})(AuthActionTypes || (AuthActionTypes = {}));
var LoginAction = /** @class */ (function () {
    function LoginAction(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN;
    }
    return LoginAction;
}());

var LoginSuccessAction = /** @class */ (function () {
    function LoginSuccessAction(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_SUCCESS;
    }
    return LoginSuccessAction;
}());

var LoginFailAction = /** @class */ (function () {
    function LoginFailAction(message) {
        this.message = message;
        this.type = AuthActionTypes.LOGIN_FAIL;
    }
    return LoginFailAction;
}());

var LogoutAction = /** @class */ (function () {
    function LogoutAction() {
        this.type = AuthActionTypes.LOGOUT;
    }
    return LogoutAction;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.effects.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.effects.ts ***!
  \*******************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core.state */ "./src/app/core/core.state.ts");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.actions */ "./src/app/core/auth/auth.actions.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthEffects = /** @class */ (function () {
    function AuthEffects(store, actions$, authService, localStorageService, router) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.router = router;
        this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_8__["AuthActionTypes"].LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            return _this.authService.login(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.router.navigateByUrl('/'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _auth_actions__WEBPACK_IMPORTED_MODULE_8__["LoginSuccessAction"](data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (message) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_8__["LoginFailAction"](message)); }));
        }));
        this.redirect$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_8__["AuthActionTypes"].LOGOUT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.router.navigateByUrl('/login'); }));
        this.storeAuth$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_8__["AuthActionTypes"].LOGIN_SUCCESS, _auth_actions__WEBPACK_IMPORTED_MODULE_8__["AuthActionTypes"].LOGIN_FAIL, _auth_actions__WEBPACK_IMPORTED_MODULE_8__["AuthActionTypes"].LOGOUT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.store.select(_core_state__WEBPACK_IMPORTED_MODULE_6__["selectAuthState"]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (auth) { return _this.localStorageService.setItem('auth', auth); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AuthEffects.prototype, "login$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "redirect$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "storeAuth$", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/core/auth/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.store
            .select(function (state) { return state.auth.token; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (token) { return !!token; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (activate) {
            if (!activate)
                _this.router.navigateByUrl('/login');
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.reducer.ts ***!
  \*******************************************/
/*! exports provided: initialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/core/auth/auth.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var initialState = {
    token: '',
    authenticating: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LOGIN:
            return __assign({}, state, { authenticating: true });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LOGIN_SUCCESS:
            return __assign({}, state, { token: action.payload.token.id, authenticating: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LOGIN_FAIL:
            return __assign({}, state, { authenticating: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LOGOUT:
            return __assign({}, state, { token: '' });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (_a) {
        var username = _a.username, password = _a.password;
        return this.http.post('/api/tokens', {
            username: username,
            password: password,
            domain_name: 'default'
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <nav class=\"footer-nav\">\n        <ul>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Descobrir</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Perfil</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Ações</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cia-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/components/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/components/logado/logado.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/logado/logado.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cia-navbar></cia-navbar>\n<router-outlet></router-outlet>\n<cia-footer></cia-footer>\n"

/***/ }),

/***/ "./src/app/core/components/logado/logado.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/logado/logado.component.ts ***!
  \************************************************************/
/*! exports provided: LogadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogadoComponent", function() { return LogadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogadoComponent = /** @class */ (function () {
    function LogadoComponent() {
    }
    LogadoComponent.prototype.ngOnInit = function () { };
    LogadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'logado',
            template: __webpack_require__(/*! ./logado.component.html */ "./src/app/core/components/logado/logado.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LogadoComponent);
    return LogadoComponent;
}());



/***/ }),

/***/ "./src/app/core/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/bulding.jpg')\">\n    <form class=\"card-login\" [formGroup]=\"form\" (submit)=\"onLogin()\">\n      <!-- <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div> -->\n\n      <div class=\"input-group form-group-no-border\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Usuário\" formControlName=\"username\">\n        <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Usuário\" formControlName=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.username.errors.required\">Digite o usuário</div>\n        </div> -->\n      </div>\n\n      <div class=\"input-group form-group-no-border\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Senha\" formControlName=\"password\">\n        <!-- <input type=\"password\" class=\"form-control\" placeholder=\"Senha\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.password.errors.required\">Digite a senha</div>\n        </div> -->\n      </div>\n\n      <button class=\"btn .buttom-signup btn-block btn-round\" [disabled]=\"authenticating$ | async\">Entrar</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/core/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/core/components/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-login {\n  background-color: #040c3b;\n  color: white;\n  width: 300px;\n  padding: 20px;\n  border-radius: 5px; }\n  .card-login .input-group {\n    margin-bottom: 20px; }\n  .card-login .buttom-signup {\n    background-color: black;\n    border-color: black;\n    color: white;\n    opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhcmEvRG9jdW1lbnRvcy9wcm9qZXRvcy9jaWEvcHJvamV0b3MvY2lhX2Zyb250ZW5kL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQixFQUFBO0VBTHBCO0lBUUksbUJBQW1CLEVBQUE7RUFSdkI7SUFZSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDBjM2I7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmJ1dHRvbS1zaWdudXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth/auth.actions */ "./src/app/core/auth/auth.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.form = this.fb.group({
            username: null,
            password: null
        });
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticating$ = this.store
            .select(function (state) { return state.auth.authenticating; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        this.authenticating$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (authenticating) {
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
        this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LoginAction"](this.form.value));
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/core/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/components/navbar/navbar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\" color-on-scroll=\"500\">\n  <div class=\"container\">\n    <button\n      type=\"button\"\n      class=\"navbar-toggler navbar-toggler-right\"\n      style=\"margin-right:auto\"\n      [class.toggled]=\"sidebarVisible\"\n      (click)=\"sidebarToggle()\"\n    >\n      <i class=\"fa fa-bars\"></i>\n    </button>\n\n    <a class=\"navbar-brand\" href=\"#\">CIA</a>\n\n    <div class=\" navbar-collapse\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\"></li>\n        <li class=\"nav-item\">\n          <div ngbDropdown class=\"d-inline-block dropdown\">\n            <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle\n              >Varejo +</a\n            >\n            <div\n              ngbDropdownMenu\n              aria-labelledby=\"dropdownBasic1\"\n              class=\"dropdown-primary\"\n            >\n              <a class=\"dropdown-item\">Empresas</a>\n              <a class=\"dropdown-item\">Funcionários</a>\n              <a class=\"dropdown-item\">Pessoas</a>\n              <a class=\"dropdown-item\">Franqueadas</a>\n              <a class=\"dropdown-item\">Regionais</a>\n            </div>\n          </div>\n        </li>\n        <li class=\"nav-item\"></li>\n        <li class=\"nav-item\"></li>\n        <li class=\"nav-item\"></li>\n        <li class=\"nav-item\"></li>\n      </ul>\n    </div>\n    <button\n      type=\"button\"\n      class=\"btn btn-outline-gray btn-round\"\n      (click)=\"onLogout()\"\n    >\n      <i class=\"fa fa-sign-out-alt\"></i> Sair\n    </button>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/components/navbar/navbar.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-gray {\n  border-color: #9a9a9a;\n  color: #9a9a9a;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  border: 1px solid #9a9a9a; }\n\n.btn-outline-gray:hover,\n.btn-outline-gray:focus,\n.btn-outline-gray:active,\n.btn-outline-gray.active,\n.open > .btn-outline-gray.dropdown-toggle {\n  background-color: #9a9a9a;\n  color: rgba(255, 255, 255, 0.8);\n  border-color: #9a9a9a;\n  border: 1px solid #9a9a9a; }\n\n.btn-outline-gray:hover .caret,\n.btn-outline-gray:focus .caret,\n.btn-outline-gray:active .caret,\n.btn-outline-gray.active .caret,\n.open > .btn-outline-gray.dropdown-toggle .caret {\n  border-top-color: rgba(255, 255, 255, 0.8); }\n\n.btn-outline-gray .caret {\n  border-top-color: #FFFFFF; }\n\n.btn-outline-gray.disabled,\n.btn-outline-gray.disabled:hover,\n.btn-outline-gray.disabled:focus,\n.btn-outline-gray.disabled.focus,\n.btn-outline-gray.disabled:active,\n.btn-outline-gray.disabled.active,\n.btn-outline-gray:disabled,\n.btn-outline-gray:disabled:hover,\n.btn-outline-gray:disabled:focus,\n.btn-outline-gray:disabled.focus,\n.btn-outline-gray:disabled:active,\n.btn-outline-gray:disabled.active,\n.btn-outline-gray[disabled],\n.btn-outline-gray[disabled]:hover,\n.btn-outline-gray[disabled]:focus,\n.btn-outline-gray[disabled].focus,\n.btn-outline-gray[disabled]:active,\n.btn-outline-gray[disabled].active,\nfieldset[disabled] .btn-outline-gray,\nfieldset[disabled] .btn-outline-gray:hover,\nfieldset[disabled] .btn-outline-gray:focus,\nfieldset[disabled] .btn-outline-gray.focus,\nfieldset[disabled] .btn-outline-gray:active,\nfieldset[disabled] .btn-outline-gray.active {\n  background-color: transparent;\n  border-color: #9a9a9a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhcmEvRG9jdW1lbnRvcy9wcm9qZXRvcy9jaWEvcHJvamV0b3MvY2lhX2Zyb250ZW5kL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIseUJBQXlCLEVBQUE7O0FBRzNCOzs7OztFQUtFLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBOztBQUczQjs7Ozs7RUFLRSwwQ0FBMEMsRUFBQTs7QUFHNUM7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXdCRSw2QkFBNkI7RUFDN0IscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tb3V0bGluZS1ncmF5IHtcbiAgYm9yZGVyLWNvbG9yOiAjOWE5YTlhO1xuICBjb2xvcjogIzlhOWE5YTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5YTlhOWE7XG59XG5cbi5idG4tb3V0bGluZS1ncmF5OmhvdmVyLFxuLmJ0bi1vdXRsaW5lLWdyYXk6Zm9jdXMsXG4uYnRuLW91dGxpbmUtZ3JheTphY3RpdmUsXG4uYnRuLW91dGxpbmUtZ3JheS5hY3RpdmUsXG4ub3Blbj4uYnRuLW91dGxpbmUtZ3JheS5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWE5YTlhO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXItY29sb3I6ICM5YTlhOWE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5YTlhOWE7XG59XG5cbi5idG4tb3V0bGluZS1ncmF5OmhvdmVyIC5jYXJldCxcbi5idG4tb3V0bGluZS1ncmF5OmZvY3VzIC5jYXJldCxcbi5idG4tb3V0bGluZS1ncmF5OmFjdGl2ZSAuY2FyZXQsXG4uYnRuLW91dGxpbmUtZ3JheS5hY3RpdmUgLmNhcmV0LFxuLm9wZW4+LmJ0bi1vdXRsaW5lLWdyYXkuZHJvcGRvd24tdG9nZ2xlIC5jYXJldCB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuLmJ0bi1vdXRsaW5lLWdyYXkgLmNhcmV0IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLmJ0bi1vdXRsaW5lLWdyYXkuZGlzYWJsZWQsXG4uYnRuLW91dGxpbmUtZ3JheS5kaXNhYmxlZDpob3Zlcixcbi5idG4tb3V0bGluZS1ncmF5LmRpc2FibGVkOmZvY3VzLFxuLmJ0bi1vdXRsaW5lLWdyYXkuZGlzYWJsZWQuZm9jdXMsXG4uYnRuLW91dGxpbmUtZ3JheS5kaXNhYmxlZDphY3RpdmUsXG4uYnRuLW91dGxpbmUtZ3JheS5kaXNhYmxlZC5hY3RpdmUsXG4uYnRuLW91dGxpbmUtZ3JheTpkaXNhYmxlZCxcbi5idG4tb3V0bGluZS1ncmF5OmRpc2FibGVkOmhvdmVyLFxuLmJ0bi1vdXRsaW5lLWdyYXk6ZGlzYWJsZWQ6Zm9jdXMsXG4uYnRuLW91dGxpbmUtZ3JheTpkaXNhYmxlZC5mb2N1cyxcbi5idG4tb3V0bGluZS1ncmF5OmRpc2FibGVkOmFjdGl2ZSxcbi5idG4tb3V0bGluZS1ncmF5OmRpc2FibGVkLmFjdGl2ZSxcbi5idG4tb3V0bGluZS1ncmF5W2Rpc2FibGVkXSxcbi5idG4tb3V0bGluZS1ncmF5W2Rpc2FibGVkXTpob3Zlcixcbi5idG4tb3V0bGluZS1ncmF5W2Rpc2FibGVkXTpmb2N1cyxcbi5idG4tb3V0bGluZS1ncmF5W2Rpc2FibGVkXS5mb2N1cyxcbi5idG4tb3V0bGluZS1ncmF5W2Rpc2FibGVkXTphY3RpdmUsXG4uYnRuLW91dGxpbmUtZ3JheVtkaXNhYmxlZF0uYWN0aXZlLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tb3V0bGluZS1ncmF5LFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tb3V0bGluZS1ncmF5OmhvdmVyLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tb3V0bGluZS1ncmF5OmZvY3VzLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tb3V0bGluZS1ncmF5LmZvY3VzLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tb3V0bGluZS1ncmF5OmFjdGl2ZSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLW91dGxpbmUtZ3JheS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjOWE5YTlhO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/components/navbar/navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth/auth.actions */ "./src/app/core/auth/auth.actions.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(store, document) {
        this.store = store;
        this.document = document;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        this.document.body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        this.sidebarVisible = !this.sidebarVisible;
        if (this.sidebarVisible) {
            this.document.body.classList.add('nav-open');
        }
        else {
            this.document.body.classList.remove('nav-open');
        }
        /*
        if (this.sidebarVisible === false) {
          this.sidebarOpen();
        } else {
          this.sidebarClose();
        }
        */
    };
    NavbarComponent.prototype.onLogout = function () {
        this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["LogoutAction"]());
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cia-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/core/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/core/components/navbar/navbar.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            Document])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core.state */ "./src/app/core/core.state.ts");
/* harmony import */ var _auth_auth_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.effects */ "./src/app/core/auth/auth.effects.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/core/auth/auth.guard.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/core/components/login/login.component.ts");
/* harmony import */ var _components_logado_logado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/logado/logado.component */ "./src/app/core/components/logado/logado.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/core/components/navbar/navbar.component.ts");
/* harmony import */ var _http_interceptors__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./http-interceptors */ "./src/app/core/http-interceptors/index.ts");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _router_custom_serializer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./router/custom-serializer */ "./src/app/core/router/custom-serializer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






















var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_logado_logado_component__WEBPACK_IMPORTED_MODULE_17__["LogadoComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"]
            ],
            exports: [_components_logado_logado_component__WEBPACK_IMPORTED_MODULE_17__["LogadoComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]],
            imports: [
                // angular
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"],
                // ngrx
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_core_state__WEBPACK_IMPORTED_MODULE_11__["reducers"], { metaReducers: _core_state__WEBPACK_IMPORTED_MODULE_11__["metaReducers"] }),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot(),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_auth_auth_effects__WEBPACK_IMPORTED_MODULE_12__["AuthEffects"]]),
                _env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production ? [] : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument()
            ],
            providers: [
                // effects
                _auth_auth_effects__WEBPACK_IMPORTED_MODULE_12__["AuthEffects"],
                //
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_20__["LocalStorageService"],
                _http_interceptors__WEBPACK_IMPORTED_MODULE_19__["httpInterceptorProviders"],
                { provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["RouterStateSerializer"], useClass: _router_custom_serializer__WEBPACK_IMPORTED_MODULE_21__["CustomSerializer"] }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/core.state.ts":
/*!************************************!*\
  !*** ./src/app/core/core.state.ts ***!
  \************************************/
/*! exports provided: reducers, metaReducers, selectAuthState, selectRouterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthState", function() { return selectAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouterState", function() { return selectRouterState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta-reducers/init-state-from-local-storage.reducer */ "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/core/auth/auth.reducer.ts");






var reducers = {
    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_5__["authReducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"]
};
var metaReducers = [
    _meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_4__["initStateFromLocalStorage"]
];
if (!_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    metaReducers.unshift(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__["storeFreeze"]);
}
var selectAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
var selectRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('router');


/***/ }),

/***/ "./src/app/core/http-interceptors/index.ts":
/*!*************************************************!*\
  !*** ./src/app/core/http-interceptors/index.ts ***!
  \*************************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/core/http-interceptors/jwt.interceptor.ts");
/* "Barrel" of Http Interceptors; see HttpClient docs and sample code for more info */


/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"], multi: true }
];


/***/ }),

/***/ "./src/app/core/http-interceptors/jwt.interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/http-interceptors/jwt.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(store) {
        this.store = store;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        return this.store
            .select(function (state) { return state.auth.token; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (token) {
            if (token) {
                request = request.clone({
                    setHeaders: { token: token }
                });
            }
            return next.handle(request);
        }));
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/core/local-storage/local-storage.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/local-storage/local-storage.service.ts ***!
  \*************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var APP_PREFIX = 'CIA-';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.loadInitialState = function () {
        return Object.keys(localStorage).reduce(function (state, storageKey) {
            if (storageKey.includes(APP_PREFIX)) {
                var stateKeys_1 = storageKey
                    .replace(APP_PREFIX, '')
                    .toLowerCase()
                    .split('.')
                    .map(function (key) {
                    return key
                        .split('-')
                        .map(function (token, index) {
                        return index === 0
                            ? token
                            : token.charAt(0).toUpperCase() + token.slice(1);
                    })
                        .join('');
                });
                var currentStateRef_1 = state;
                stateKeys_1.forEach(function (key, index) {
                    if (index === stateKeys_1.length - 1) {
                        currentStateRef_1[key] = JSON.parse(localStorage.getItem(storageKey));
                        return;
                    }
                    currentStateRef_1[key] = currentStateRef_1[key] || {};
                    currentStateRef_1 = currentStateRef_1[key];
                });
            }
            return state;
        }, {});
    };
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem("" + APP_PREFIX + key, JSON.stringify(value));
    };
    LocalStorageService.prototype.getItem = function (key) {
        return JSON.parse(localStorage.getItem("" + APP_PREFIX + key));
    };
    LocalStorageService.prototype.removeItem = function (key) {
        localStorage.removeItem("" + APP_PREFIX + key);
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts ***!
  \*****************************************************************************/
/*! exports provided: initStateFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStateFromLocalStorage", function() { return initStateFromLocalStorage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function initStateFromLocalStorage(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        if ([_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["INIT"].toString(), _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["UPDATE"].toString()].includes(action.type)) {
            return __assign({}, newState, _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].loadInitialState());
        }
        return newState;
    };
}


/***/ }),

/***/ "./src/app/core/router/custom-serializer.ts":
/*!**************************************************!*\
  !*** ./src/app/core/router/custom-serializer.ts ***!
  \**************************************************/
/*! exports provided: CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerState.url, queryParams = routerState.root.queryParams;
        var params = route.params;
        return { url: url, params: params, queryParams: queryParams };
    };
    CustomSerializer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CustomSerializer);
    return CustomSerializer;
}());



/***/ }),

/***/ "./src/app/shared/components/card/card.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/card/card.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <strong>{{ title }}</strong>\n  </div>\n  <div class=\"card-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/card/card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cia-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/shared/components/card/card.component.html")
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/title/title.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/title/title.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header page-header-small fundo-produto\" style=\"background-image: url('assets/img/produto.jpg')\">\n  <div class=\"filter\">\n    <div class=\"content-center\">\n      <div class=\"container\">\n        <h1 style=\"color: white;\">{{title.name}}</h1>\n        <br>\n        <h5 style=\"color: white;\">{{title.description}}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/title/title.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/title/title.component.ts ***!
  \************************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.title = { name: 'Title' };
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TitleComponent.prototype, "title", void 0);
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cia-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/shared/components/title/title.component.html")
        })
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/title/title.component */ "./src/app/shared/components/title/title.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"]],
            exports: [_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sara/Documentos/projetos/cia/projetos/cia_frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map