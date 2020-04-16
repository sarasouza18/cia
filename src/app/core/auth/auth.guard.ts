import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../core.state';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public store: Store<AppState>, public router: Router) {}

  canActivate() {
    return this.store
      .select(state => state.auth.token)
      .pipe(
        map(token => !!token),
        tap(activate => {
          if (!activate) this.router.navigateByUrl('/login');
        })
      );
  }
}
