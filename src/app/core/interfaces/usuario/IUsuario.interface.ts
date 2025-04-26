
export interface IUser{
    IdTrabajador: string;
    IdUsuario: string;
    NombreUsuario: string;
    IdPerfil: string;
    NombrePerfil: string;
    IdAgencia: string;
    NombreAgencia: string;
    jti: string;
    iat: number;
    nbf: number;
    exp: number;
}