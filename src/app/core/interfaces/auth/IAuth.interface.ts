export interface IAuth{
    idUsuario:          number;
    nombre_Completo:    string;
    genero:             string;
    documentoIdentidad: string;
    agencia:            string;
    perfil:             string;
    token:              string;
    refreshToken:       string;
}