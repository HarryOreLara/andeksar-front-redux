export const C_PERFILES_CONSTANT: any[] = [
  {
    id: 1,
    nombre: 'Operaciones',
    subMenus: [
      {
        id: 1,
        nombre: 'Nueva Orden',
        url: '/nueva-orden',
        roles: [
          {
            id: 1,
            descripcion: 'CREAR',
            estado: true,
          },
          {
            id: 2,
            descripcion: 'EDITAR',
            estado: true,
          },
          {
            id: 3,
            descripcion: 'ELIMINAR',
            estado: true,
          }
        ],
        subItems: [],
      },
      {
        id: 2,
        nombre: 'Orden Servicio',
        url: '/orden-servicio',
        subItems: [
          {
            id: 1,
            nombre: 'Orden Individual',
            url: '/ordenes',
            roles: [
              {
                id: 1,
                descripcion: 'CREAR',
                estado: true,
              },
              {
                id: 2,
                descripcion: 'EDITAR',
                estado: true,
              },
              {
                id: 3,
                descripcion: 'ELIMINAR',
                estado: true,
              },
              {
                id: 4,
                descripcion: 'ACTUALIZAR',
                estado: true,
              },
              
            ],
          },
          {
            id: 2,
            nombre: 'Orden Masiva',
            url: '/servicios',
            roles: [
              {
                id: 1,
                descripcion: 'CREAR',
                estado: true,
              },
              {
                id: 2,
                descripcion: 'EDITAR',
                estado: true,
              },
              {
                id: 3,
                descripcion: 'ELIMINAR',
                estado: true,
              },
              {
                id: 4,
                descripcion: 'ACTUALIZAR',
                estado: true,
              },
            ],
          },
        ],
        roles: [],
      },
    ],
  },
  {
    id: 2,
    nombre: 'Personal',
    subMenus: [
      {
        id: 1,
        nombre: 'Trabajadores',
        url: '/trabajadores',
        subItems: [],
        roles: [],
      },
      {
        id: 2,
        nombre: 'Choferes',
        url: '/choferes',
        subItems: [],
        roles: [],
      },
    ],
  },

  {
    id: 3,
    nombre: 'Configuración',
    subMenus: [],
  },
];
