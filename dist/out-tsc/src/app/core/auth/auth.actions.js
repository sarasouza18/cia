export var AuthActionTypes;
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
export { LoginAction };
var LoginSuccessAction = /** @class */ (function () {
    function LoginSuccessAction(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_SUCCESS;
    }
    return LoginSuccessAction;
}());
export { LoginSuccessAction };
var LoginFailAction = /** @class */ (function () {
    function LoginFailAction(message) {
        this.message = message;
        this.type = AuthActionTypes.LOGIN_FAIL;
    }
    return LoginFailAction;
}());
export { LoginFailAction };
var LogoutAction = /** @class */ (function () {
    function LogoutAction() {
        this.type = AuthActionTypes.LOGOUT;
    }
    return LogoutAction;
}());
export { LogoutAction };
//# sourceMappingURL=auth.actions.js.map