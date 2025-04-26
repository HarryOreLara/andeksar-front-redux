export class Usuario {
  estado: boolean;
  fechaCreacion: Date;

  constructor() {
    this.estado = true;
    this.fechaCreacion = new Date();
  }
}

export class UsuarioCreateDTO extends Usuario {
  trabajador: number;
  agencia: number;
  perfil: number;
  creador: number;

  constructor() {
    super();
    this.trabajador = 0;
    this.agencia = 0;
    this.perfil = 0;
    this.creador = 0;
  }
}


class UsuarioDetalle {
  agencia: string;
  perfil: string;
  fechaCreacion: string;
  estado: boolean;

  constructor() {
    this.agencia = '';
    this.perfil = '';
    this.fechaCreacion = '';
    this.estado = true;
  }
}


export class UsuarioResponseDTO extends Usuario {
  id: number;
  nombre: string;
  agencia: string;
  perfil: string;
  creador: string;
  detalle: UsuarioDetalle[] ;

  constructor() {
    super();
    this.id = 0;
    this.nombre = '';
    this.agencia = '';
    this.perfil = '';
    this.creador = '';
    this.detalle = [];
  }
}
