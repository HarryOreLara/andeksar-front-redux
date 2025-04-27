import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { Cliente, Direcciones } from 'src/app/core/class/maestros';

@Injectable({
  providedIn: 'root',
})
export class DireccionesReactivasService {
  private remitenteSubject = new BehaviorSubject<Cliente>(new Cliente());
  private destinatarioSubject = new BehaviorSubject<Cliente>(new Cliente());
  private agenciaRemitenteSubject = new BehaviorSubject<Estandar>(new Estandar());
  private agenciaDestinatarioSubject = new BehaviorSubject<Estandar>(
    new Estandar()
  );

  remitente$ = this.remitenteSubject.asObservable();
  destinatario$ = this.destinatarioSubject.asObservable();
  agenciaRemitente$ = this.agenciaRemitenteSubject.asObservable();
  agenciaDestinatario$ = this.agenciaDestinatarioSubject.asObservable();

  private direccionesRemitenteSubject = new BehaviorSubject<Direcciones[]>([]);
  private direccionesDestinatarioSubject = new BehaviorSubject<Direcciones[]>(
    []
  );

  direccionesRemitente$ = this.direccionesRemitenteSubject.asObservable();
  direccionesDestinatario$ = this.direccionesDestinatarioSubject.asObservable();

  setRemitente(cliente: Cliente) {
    this.remitenteSubject.next(cliente);
    this.actualizarDirecciones();
  }

  setDestinatario(cliente: Cliente) {
    this.destinatarioSubject.next(cliente);
    this.actualizarDirecciones();
  }

  setAgenciaRemitente(agencia: Estandar) {
    this.agenciaRemitenteSubject.next(agencia);
    this.actualizarDirecciones();
  }

  setAgenciaDestinatario(agencia: Estandar) {
    this.agenciaDestinatarioSubject.next(agencia);
    this.actualizarDirecciones();
  }

  private actualizarDirecciones() {
    const remitente = this.remitenteSubject.value;
    const destinatario = this.destinatarioSubject.value;
    const agenciaRemitente = this.agenciaRemitenteSubject.value;
    const agenciaDestinatario = this.agenciaDestinatarioSubject.value;
  }
}
