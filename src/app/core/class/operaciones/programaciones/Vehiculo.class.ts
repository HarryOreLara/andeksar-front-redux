import { Estandar } from "../../estandar/Estandar.class";

export class Vehiculo {
  id: number;
  ejes: number;
  fechaInscripcion: Date;
  placa: string;
  serieVehiculo: string;
  marca: string;
  modelo: string;
  serieMotor: string;
  externo: boolean;
  estado: Estandar;

  constructor(vehiculo: Partial<Vehiculo> = {}) {
    this.id = vehiculo.id || 0;
    this.ejes = vehiculo.ejes || 0;
    this.fechaInscripcion = vehiculo.fechaInscripcion || new Date();
    this.placa = vehiculo.placa || '';
    this.serieVehiculo = vehiculo.serieVehiculo || '';
    this.marca = vehiculo.marca || '';
    this.modelo = vehiculo.modelo || '';
    this.serieMotor = vehiculo.serieMotor || '';
    this.externo = vehiculo.externo || false;
    this.estado = vehiculo.estado || new Estandar();
  }

  static fromJson(data: any): Vehiculo {
    return new Vehiculo({
      id: data.id,
      ejes: data.ejes,
      fechaInscripcion: new Date(data.fechaInscripcion),
      placa: data.placa,
      serieVehiculo: data.serieVehiculo,
      marca: data.marca,
      modelo: data.modelo,
      serieMotor: data.serieMotor,
      externo: data.externo,
      estado: Estandar.fromJson(data.estado),
    });
  }

  static toJson(vehiculo: Vehiculo): any {
    return {
      id: vehiculo.id,
      ejes: vehiculo.ejes,
      fechaInscripcion: vehiculo.fechaInscripcion,
      placa: vehiculo.placa,
      serieVehiculo: vehiculo.serieVehiculo,
      marca: vehiculo.marca,
      modelo: vehiculo.modelo,
      serieMotor: vehiculo.serieMotor,
      externo: vehiculo.externo,
      estado: vehiculo.estado.id,
    };
  }

  isEmpty(): boolean {
    return (
      this.id === 0 &&
      this.ejes === 0 &&
      this.fechaInscripcion === new Date() &&
      this.placa === '' &&
      this.serieVehiculo === '' &&
      this.marca === '' &&
      this.modelo === '' &&
      this.serieMotor === '' &&
      this.externo === false &&
      this.estado.id === 0 
    );
  }
}
