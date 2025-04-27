import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';

@Injectable({
  providedIn: 'root'
})
export class AgenciaSeleccionService {

  private agenciesSource = new BehaviorSubject<Estandar[]>([]);
  agencies$ = this.agenciesSource.asObservable();

  constructor() {}

  setAgencies(agencies: Estandar[]) {
    this.agenciesSource.next(agencies);
  }

  removeAgency(agencyId: number) {
    const current = this.agenciesSource.value;
    const updated = current.filter(a => a.id !== agencyId);
    this.agenciesSource.next(updated);
  }

  addAgency(agency: Estandar) {
    const current = this.agenciesSource.value;
    this.agenciesSource.next([...current, agency]);
  }
}
