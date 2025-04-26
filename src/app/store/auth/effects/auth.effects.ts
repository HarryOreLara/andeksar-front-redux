import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
  login,
  loginError,
  loginSuccess,
  logout,
  logoutError,
  logoutSuccess,
} from '../actions/auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthToken } from 'src/app/core/class/auth/Auth.class';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) =>
        this.authService.loginService$(action.auth).pipe(
          map((authToken: AuthToken) => {
            return loginSuccess({ authToken });
          }),
          catchError((error) => {
            console.log(error);
            return of(loginError({ error }));
          })
        )
      )
    )
  );

  // logout$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(logout),
  //     mergeMap(() =>
  //       this.authService.logoutService$().pipe(
  //         map(() => {
  //           return logoutSuccess();
  //         }),
  //         catchError((error) => {
  //           return of(logoutError({ error }));
  //         })
  //       )
  //     )
  //   )
  // );
}
