import { createFeatureSelector } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '@env/environment';
import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { authReducer } from './auth/auth.reducer';
export var reducers = {
    auth: authReducer,
    router: routerReducer
};
export var metaReducers = [
    initStateFromLocalStorage
];
if (!environment.production) {
    metaReducers.unshift(storeFreeze);
}
export var selectAuthState = createFeatureSelector('auth');
export var selectRouterState = createFeatureSelector('router');
//# sourceMappingURL=core.state.js.map