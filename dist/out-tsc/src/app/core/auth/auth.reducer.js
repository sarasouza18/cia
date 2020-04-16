var __assign = (this && this.__assign) || function () {
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
import { AuthActionTypes } from './auth.actions';
export var initialState = {
    token: '',
    authenticating: false
};
export function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return __assign({}, state, { authenticating: true });
        case AuthActionTypes.LOGIN_SUCCESS:
            return __assign({}, state, { token: action.payload.token, authenticating: false });
        case AuthActionTypes.LOGIN_FAIL:
            return __assign({}, state, { authenticating: false });
        case AuthActionTypes.LOGOUT:
            return __assign({}, state, { token: '' });
        default:
            return state;
    }
}
//# sourceMappingURL=auth.reducer.js.map