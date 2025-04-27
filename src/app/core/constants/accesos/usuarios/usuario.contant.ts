import { ItemUsuario } from 'src/app/core/class/accesos/usuarios/Item-Usuario.class';
import { Usuario } from 'src/app/core/class/accesos/usuarios/usuarios.class';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { Trabajador } from 'src/app/core/class/personal/trabajador/Trabajador.class';

const trabajador = new Trabajador({
  nombreCompleto: 'Juan Perez',
  tipoDocumento: new Estandar({
    id: 52,
    descripcion: 'Doc. Nacional de Identidad',
    estado: true,
  }),
  documento: '73617110',
  estado: true,
});



const itemsUsuario: ItemUsuario[] = [
    new ItemUsuario({
      id: 1,
      agencia: new Estandar({
        id: 1,
        descripcion: 'San Luis',
        estado: true,
      }),
      perfil: new Estandar({
        id: 1,
        descripcion: 'Administrador',
      }),
    }),
    new ItemUsuario({
      id: 2,
      agencia: new Estandar({
        id: 7,
        descripcion: 'Trujillo',
        estado: true,
      }),
      perfil: new Estandar({
        id: 2,
        descripcion: 'Cajero',
      }),
    }),
  ];


export const USUARIO_CONSTANT: Usuario = new Usuario({
    id:15,
    itemUsuario: itemsUsuario,
    trabajador: trabajador,
});


export const sdf = {
    documento: '73617110',
    tipoDocumento: 52
}