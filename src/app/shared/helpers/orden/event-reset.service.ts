import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventResetService {
  private resetTrigger = new BehaviorSubject<boolean>(false);

  // Observable que los componentes pueden escuchar
  resetTrigger$ = this.resetTrigger.asObservable();

  // Método para activar la alerta
  triggerReset() {
    this.resetTrigger.next(true);
  }
}