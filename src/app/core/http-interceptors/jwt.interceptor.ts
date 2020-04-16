import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap, first } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../core.state';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store
      .select(state => state.auth.token)
      .pipe(
        first(),
        mergeMap(token => {
          if (token) {
            request = request.clone({
              setHeaders: { token }
            });
          }

          return next.handle(request);
        })
      );
  }
}
