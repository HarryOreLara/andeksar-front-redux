import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';
import { Auth, AuthToken } from 'src/app/core/class/auth/Auth.class';
import { AuthCookieService } from 'src/app/core/services/cookie/cookie.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  base_url: string = environment.URL_AUTH;
  private subject$ = new Subject<any>();

  constructor(
    private readonly httpClient: HttpClient,
    private authCookieService: AuthCookieService
  ) {}

  loginService$(data: any): Observable<AuthToken> {
    let direccion = `${this.base_url}/Seguridad/Autenticacion`;

    return this.httpClient.post<AuthToken>(direccion, data).pipe(
      map((auth: AuthToken) => {
        this.authCookieService.setToken(auth.token);
        return AuthToken.fromJson(auth);
      })
    );
  }

  refreshTokenSerive$() {
    let token = this.authCookieService.getToken();
    let data = {
      refreshToken: token,
    };
    let direccion = `${this.base_url}/Seguridad/RefreshToken`;
    return this.httpClient.post<any>(direccion, data).pipe(
      catchError((err) => {
        // this.customErrorService.listError(err);
        this.logoutService$();
        return throwError(() => err);
      })
    );
  }

  registerService$() {}

  checkStatusService$() {
    const token = this.authCookieService.getToken();
    return !!token;
  }

  logoutService$() {
    this.authCookieService.clearToken();
  }
}
