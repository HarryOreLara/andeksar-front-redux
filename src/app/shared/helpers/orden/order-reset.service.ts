import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderResetService {

  // Subject para emitir eventos de reset
  private resetFormsSource = new Subject<void>();

  // Observable que los componentes pueden suscribirse
  resetForms$ = this.resetFormsSource.asObservable();

  // Método para emitir el evento
  triggerFormReset() {
    this.resetFormsSource.next();
  }


}
