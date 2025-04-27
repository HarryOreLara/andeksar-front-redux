import {  Injectable } from '@angular/core';

import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomErrorService {
  constructor(private messageService: MessageService) {}

  listError(err: HttpErrorResponse) {
   
    switch (err.status) {
      case 400: // Bad Request
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error 400, Solicitud Incorrecta',
        });
        console.error('Solicitud incorrecta. Verifique los datos ingresados.');
        break;
      case 401: // Unauthorized
        console.error(
          'Acceso no autorizado. Inicie sesión e intente nuevamente.'
        );
        break;
      case 404: // Unauthorized
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error 404',
        });
        console.error('No Encontrado.', err);
        break;
      case 412: // Unauthorized
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error 412',
        });
        console.error(err.error.message);
        break;
      case 422: // Unauthorized
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error 422',
        });
        console.error(err.error.message);
        break;
      case 500: // Internal Server Error
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error 500',
        });
        console.error('Error interno del servidor. Inténtelo más tarde.');
        break;
      default:
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error no controlado, contacte con Sistemas',
        });
        console.error('Error desconocido:', err);
    }
  }
}
