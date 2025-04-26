export enum OrdenServicioState {
    PENDIENTE_RECOJO = 1,
    RECOJO_PUNTO_ORIGEN = 2,
    ORIGEN = 3,
    EN_TRANSITO = 4,
    EN_ESCALA = 5,
    DESTINO = 6,
    EN_REPARTO = 7,
    ENTREGADO = 8,
    INTENTO_ENTREGA_FALLIDO = 9,
    DEVUELTO_A_ORIGEN = 10,
    EXTRAVIADO = 11,
    DAÑADO = 12,
}