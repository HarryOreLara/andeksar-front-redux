import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventResetObjetosComunesService {
  private resetObjetosComunesTrigger = new BehaviorSubject<boolean>(false);

  // Observable que los componentes pueden escuchar
  resetObjetosComunesTrigger$ = this.resetObjetosComunesTrigger.asObservable();

  // Método para activar la alerta
  triggerObjetosComunesReset() {
    this.resetObjetosComunesTrigger.next(true);
  }
}