import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const generator = require("password-generator");
const cryptoJS = require("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(/* Add @inject to inject parameters */) {

  }

  //Generacion de claves
  GenerarClave() {
    let clave = generator(8, false);
    return clave;
  }

  //Cifrado de clave
  CifrarClave(clave: String) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }
}
