import { AuthState } from './auth.models';
import { AuthActions, AuthActionTypes } from './auth.actions';

export const initialState: AuthState = {
  token: '',
  authenticating: false
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        authenticating: true
      };

    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token.id,
        authenticating: false
      };

    case AuthActionTypes.LOGIN_FAIL:
      return {
        ...state,
        authenticating: false
      };

    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        token: ''
      };

    default:
      return state;
  }
}
