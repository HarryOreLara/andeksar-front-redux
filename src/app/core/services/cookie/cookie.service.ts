import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthCookieService {
  constructor(private cookieService: CookieService) {
  }


  setToken(token: string) {
    // Configura las opciones de la cookie según tus necesidades de seguridad
    this.cookieService.set('authToken', token, {
      path: '/',        // Asegura que la cookie esté disponible en todas las rutas de la app
      sameSite: 'Lax',  // 'Lax' permite que las cookies se envíen con solicitudes de nivel superior
    });

  }

  getToken(): string {
    return this.cookieService.get('authToken');
  }


  clearToken() {
    this.cookieService.delete('authToken');
  }

  checkTokenInCookie(): boolean {
    return this.cookieService.check('authToken');
  }

  getUserDataFromToken(): any | null {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }
}
