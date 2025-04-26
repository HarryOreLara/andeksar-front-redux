import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {  Observable } from 'rxjs';


import { AuthCookieService } from 'src/app/core/services/cookie/cookie.service';

@Injectable()
export class BearerTokenInterceptor implements HttpInterceptor {
  constructor(private readonly authCookieService: AuthCookieService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authCookieService.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
