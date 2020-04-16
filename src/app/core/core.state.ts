import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '@env/environment';
import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { AuthState } from './auth/auth.models';
import { authReducer } from './auth/auth.reducer';
import { RouterStateUrl } from './router/router.state';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];
if (!environment.production) {
  metaReducers.unshift(storeFreeze);
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');

export interface AppState {
  auth: AuthState;
  router: RouterReducerState<RouterStateUrl>;
}
