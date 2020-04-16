import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';

import { AppState, selectAuthState } from '../core.state';
import { LocalStorageService } from '../local-storage/local-storage.service';
import {
  AuthActionTypes,
  LoginSuccessAction,
  LoginFailAction,
  LoginAction
} from './auth.actions';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    mergeMap((action: LoginAction) =>
      this.authService.login(action.payload).pipe(
        tap(() => this.router.navigateByUrl('/')),
        map(data => new LoginSuccessAction(<any>data)),
        catchError(message => of(new LoginFailAction(<any>message)))
      )
    )
  );

  @Effect({ dispatch: false })
  redirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(() => this.router.navigateByUrl('/login'))
  );

  @Effect({ dispatch: false })
  storeAuth$ = this.actions$.pipe(
    ofType(
      AuthActionTypes.LOGIN_SUCCESS,
      AuthActionTypes.LOGIN_FAIL,
      AuthActionTypes.LOGOUT
    ),
    switchMap(() => this.store.select(selectAuthState)),
    tap(auth => this.localStorageService.setItem('auth', auth))
  );
}
