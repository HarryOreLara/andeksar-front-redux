import { MenuItem } from 'primeng/api';

export const CMENU_OPCIONES: MenuItem[] = [
  {
    label: 'Factura',
    icon: 'pi pi-refresh',
    command: () => {},
  },
  {
    label: 'Boleta',
    icon: 'pi pi-times',
    command: () => {},
  },
  { separator: true },
  { label: 'Anular', icon: 'pi pi-cog', routerLink: ['/setup'] },
  { label: 'Nuevo', icon: 'pi pi-cog', routerLink: ['/setup'] },
];

export const CMENU_EXPORTAR: MenuItem[] = [
  {
    label: 'Excel',
    icon: 'pi pi-refresh',
    command: () => {},
  },
  {
    label: 'PDF',
    icon: 'pi pi-refresh',
    command: () => {},
  },
];
