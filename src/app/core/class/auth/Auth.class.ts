import { Agencia } from "../agencias/agencias.class";
import { Estandar } from "../estandar/Estandar.class";

export class Auth {
  documento: string;
  contraseña: string;
  agencia: Estandar;

  constructor(auth: Partial<Auth> = {}) {
    this.documento = auth.documento ?? '';
    this.contraseña = auth.contraseña ?? '';
    this.agencia = auth.agencia ?? new Estandar();
  }



  static toJson(auth: Auth): any {
    return {
      documento: auth.documento,
      contraseña: auth.contraseña,
      idAgencia: auth.agencia.id
    };
  }
}



export class AuthToken{
  idUsuario:          number;
  nombre_Completo:    string;
  genero:             string;
  documentoIdentidad: string;
  agencia:            string;
  perfil:             string;
  token:              string;
  refreshToken:       string;


  constructor(authToken: Partial<AuthToken> = {}) {
    this.idUsuario = authToken.idUsuario ?? 0;
    this.nombre_Completo = authToken.nombre_Completo ?? '';
    this.genero = authToken.genero ?? '';
    this.documentoIdentidad = authToken.documentoIdentidad ?? '';
    this.agencia = authToken.agencia ?? '';
    this.perfil = authToken.perfil ?? '';
    this.token = authToken.token ?? '';
    this.refreshToken = authToken.refreshToken ?? '';
  }


  static fromJson(authToken: any): AuthToken {
    return new AuthToken({
      idUsuario: authToken.idUsuario,
      nombre_Completo: authToken.nombre_Completo,
      genero: authToken.genero,
      documentoIdentidad: authToken.documentoIdentidad,
      agencia: authToken.agencia,
      perfil: authToken.perfil,
      token: authToken.token,
      refreshToken: authToken.refreshToken
    });
  }
}