import { Estandar } from '../estandar/Estandar.class';
import { Contactos } from './Contactos.class';
import { Direcciones } from './Direcciones.class';

export class Cliente {
  id: number;
  departamento: Estandar;
  provincia: Estandar;
  distrito: Estandar;
  tipoDocumento: Estandar;
  documento: string;
  nombre: string;
  apellidos: string;
  nombreCompleto: string;
  razonSocial: string;
  ubigeo: string;
  telefono: string;
  correo: string;
  contacto: string;
  direccion: string;
  activo: boolean;
  credito: boolean;
  direcciones: Direcciones[];
  contactos: Contactos[];

  constructor(cliente: Partial<Cliente> = {}) {
    this.id = cliente.id ?? 0;
    this.departamento = cliente.departamento ?? new Estandar();
    this.provincia = cliente.provincia ?? new Estandar();
    this.distrito = cliente.distrito ?? new Estandar();
    this.tipoDocumento = cliente.tipoDocumento ?? new Estandar();
    this.documento = cliente.documento ?? '';
    this.nombre = cliente.nombre ?? '';
    this.apellidos = cliente.apellidos ?? '';
    this.nombreCompleto = cliente.nombreCompleto ?? '';
    this.razonSocial = cliente.razonSocial ?? '';
    this.ubigeo = cliente.ubigeo ?? '';
    this.telefono = cliente.telefono ?? '';
    this.correo = cliente.correo ?? '';
    this.contacto = cliente.contacto ?? '';
    this.direccion = cliente.direccion ?? '';
    this.activo = cliente.activo ?? false;
    this.credito = cliente.credito ?? false;
    this.direcciones = cliente.direcciones ?? [];
    this.contactos = cliente.contactos ?? [];
  }

  static fromJson(cliente: any): Cliente {
    const parseEstandar = (field: any): Estandar =>
      field ? Estandar.fromJson(field) : new Estandar();

    return new Cliente({
      id: cliente.id,
      departamento: parseEstandar (cliente.departamento),
      provincia: parseEstandar (cliente.provincia),
      distrito: parseEstandar(cliente.distrito),
      tipoDocumento: parseEstandar (cliente.tipoDocumento),
      documento: cliente.documento,
      nombre: cliente.nombre,
      apellidos: cliente.apellidos,
      nombreCompleto: cliente.nombreCompleto,
      razonSocial: cliente.razonSocial,
      ubigeo: cliente.ubigeo,
      telefono: cliente.telefono,
      correo: cliente.correo,
      direccion: cliente.direccion,
      activo: cliente.activo,
      credito: cliente.credito,
      direcciones: cliente.direcciones,
      contactos: cliente.contactos,
    });
  }

  static toJson(cliente: Cliente): any {
    return {
      id: cliente.id,
      tipoDocumento: cliente.tipoDocumento.id,
      documento: cliente.documento,
      nombre: cliente.nombre,
      apellidos: cliente.apellidos,
      nombreCompleto: cliente.nombreCompleto ?? '',
      razonSocial: cliente.razonSocial,
      ubigeo: cliente.ubigeo,
      telefono: cliente.telefono,
      direccion: cliente.direccion,
      activo: cliente.activo ?? true,
      credito: cliente.credito,
      direcciones: cliente.direcciones,
      contactos: cliente.contactos,
    };
  }


}
