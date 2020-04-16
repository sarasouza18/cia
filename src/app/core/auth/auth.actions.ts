import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[auth] login',
  LOGIN_SUCCESS = '[auth] login success',
  LOGIN_FAIL = '[auth] login fail',
  LOGOUT = '[auth] logout'
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.LOGIN;

  constructor(public payload: { username: string; password: string }) {}
}

export class LoginSuccessAction implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { token: { id: string } }) {}
}

export class LoginFailAction implements Action {
  readonly type = AuthActionTypes.LOGIN_FAIL;

  constructor(public message: any) {}
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions =
  | LoginAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction;
