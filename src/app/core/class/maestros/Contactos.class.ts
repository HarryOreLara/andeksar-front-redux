export class Contactos{
    activo: boolean;
    idContacto: number;
    idCliente: number;
    documento: string;
    nombre: string;
    telefono: string;

    constructor(contacto: Partial<Contactos> = {}) {
        this.activo = contacto.activo || true;
        this.idContacto = contacto.idContacto || 0;
        this.idCliente = contacto.idCliente || 0;
        this.documento = contacto.documento || '';
        this.nombre = contacto.nombre || '';
        this.telefono = contacto.telefono || '';
    }

    static fromJson(data: any): Contactos {
        return new Contactos({
            activo: data.activo,
            idContacto: data.idContacto,
            idCliente: data.idCliente,
            documento: data.documento,
            nombre: data.nombre,
            telefono: data.telefono
        });
    }

    static toJson(contacto: Contactos): any {
        return {
            activo: contacto.activo,
            idContacto: contacto.idContacto,
            idCliente: contacto.idCliente,
            documento: contacto.documento,
            nombre: contacto.nombre,
            telefono: contacto.telefono
        };
    }
}