import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginAction } from '@core/auth/auth.actions';
import { Observable, Subject } from 'rxjs';

import { AppState } from '@core/core.state';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form = this.fb.group({
    username: null,
    password: null
  });

  authenticating$: Observable<boolean>;
  destroyed$ = new Subject();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.authenticating$ = this.store
      .select(state => state.auth.authenticating)
      .pipe(takeUntil(this.destroyed$));

    this.authenticating$
      .pipe(
        takeUntil(this.destroyed$),
        tap(authenticating => {
          if (authenticating) {
            this.form.disable();
          } else {
            this.form.enable();
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  onLogin() {
    this.store.dispatch(new LoginAction(this.form.value));
  }
}
