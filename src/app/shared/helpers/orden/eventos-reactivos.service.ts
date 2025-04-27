// reactive-events.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventosReactivosService {
  private eventSubjects: { [key: string]: Subject<any> } = {};

  emitEvent(eventName: string, value: any): void {
    if (!this.eventSubjects[eventName]) {
      this.eventSubjects[eventName] = new Subject<any>();
    }
    this.eventSubjects[eventName].next(value);
  }

  getEvent(eventName: string): Observable<any> {
    if (!this.eventSubjects[eventName]) {
      this.eventSubjects[eventName] = new Subject<any>();
    }
    return this.eventSubjects[eventName].asObservable();
  }



}
