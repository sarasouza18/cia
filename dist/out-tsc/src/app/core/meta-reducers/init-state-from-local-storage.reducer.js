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
import { INIT, UPDATE } from '@ngrx/store';
import { LocalStorageService } from '../local-storage/local-storage.service';
export function initStateFromLocalStorage(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
            return __assign({}, newState, LocalStorageService.loadInitialState());
        }
        return newState;
    };
}
//# sourceMappingURL=init-state-from-local-storage.reducer.js.map