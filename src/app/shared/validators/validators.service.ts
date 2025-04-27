import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  isPar(control: AbstractControl): ValidationErrors | null {
    const valor = control.value;

    if (valor % 2 !== 0) return { esPar: true };

    return null;
  }

  validatePhone(control: FormControl): ValidationErrors | null {
    const telefono = control.value;

    if (telefono == null || typeof telefono !== 'string') {
      return null; // Considerar válido si no hay valor
    }
    if (!telefono) return { telefonoInvalido: true };

    if (!telefono.startsWith('9')) return { telefonoNoComienzaCon9: true };

    if (telefono.length < 9 || telefono.length > 9)
      return { telefonoInvalido: true };

    return null;
  }

  validateDni(control: FormControl): ValidationErrors | null {
    const dni = control.value;

    // Verificar que el valor no sea nulo antes de acceder a length
    if (dni == null || typeof dni !== 'string') {
      return null; // Considerar válido si no hay valor
    }

    // Realizar la validación sólo si el valor es una cadena
    const valid = dni.length === 8; // Ejemplo: un DNI válido tiene 8 caracteres
    return valid ? null : { invalidDni: true };
  }

  // validateDni(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const value = control.value;

  //     Verificar que el valor no sea nulo antes de acceder a length
  //     if (value == null || typeof value !== 'string') {
  //       return null; // Considerar válido si no hay valor
  //     }

  //     Realizar la validación sólo si el valor es una cadena
  //     const valid = value.length === 8; // Ejemplo: un DNI válido tiene 8 caracteres
  //     return valid ? null : { invalidDni: true };
  //   };
  // }

  validateRUC(control: FormControl): ValidationErrors | null {
    const ruc = control.value;

    if (ruc == null || typeof ruc !== 'string') {
      return null; // Considerar válido si no hay valor
    }
    //Si no es un numero o cumple con otro formato
    if (ruc.length != 11 || ruc == null) return { documentoInvalido: true };

    return null;
  }

  validatePassport(control: FormControl): ValidationErrors | null {
    const passport = control.value;

    if (passport == null || typeof passport !== 'string') {
      return null; // Considerar válido si no hay valor
    }

    //Si no es un numero o cumple con otro formato
    if (passport.length < 7 || passport.length > 12 || passport == null)
      return { documentoInvalido: true };

    return null;
  }

  validateForeignerCard(control: FormControl): ValidationErrors | null {
    const card = control.value;

    if (card == null || typeof card !== 'string') {
      return null; // Considerar válido si no hay valor
    }

    //Si no es un numero o cumple con otro formato
    if (card.length < 5 || card.length > 12 || card == null)
      return { documentoInvalido: true };

    return null;
  }

  validateName(control: FormControl): ValidationErrors | null {
    const nombre = control.value;

    if (nombre == null || typeof nombre !== 'string') {
      return null; // Considerar válido si no hay valor
    }
    // Expresión regular para verificar si el nombre contiene números
    const contieneNumero = /[0-9]/.test(nombre);

    // Devuelve un objeto con una propiedad para indicar el error
    if (contieneNumero) return { contieneNumero: true };



    if (nombre.length < 3 || nombre.length > 15)
      return { formatoIncorrecto: true };

    return null; // El nombre es válido
  }

  validateLastName(control: FormControl): ValidationErrors | null {
    const apellido = control.value;

    if (apellido == null || typeof apellido !== 'string') {
      return null; // Considerar válido si no hay valor
    }
    // Expresión regular para verificar si la apellido contiene números
    const contieneNumero = /[0-9]/.test(apellido);

    // Devuelve un objeto con una propiedad para indicar el error
    if (contieneNumero) return { contieneNumero: true };



    if (apellido.length < 3 || apellido.length > 15)
      return { formatoIncorrecto: true };

    return null; // La apellido es válida
  }

  validateFullname(control: FormControl): ValidationErrors | null {
    const nombre = control.value;

    if (nombre == null || typeof nombre !== 'string') {
      return null; // Considerar válido si no hay valor
    }

    // Expresión regular para verificar si el nombre contiene números
    const contieneNumero = /[0-9]/.test(nombre);

    // Devuelve un objeto con una propiedad para indicar el error
    if (contieneNumero) return { contieneNumero: true };


    if (nombre.length < 8 || nombre.length > 55)
      return { formatoIncorrecto: true };

    return null; // El nombre es válido
  }

  validateAddress(control: FormControl): ValidationErrors | null {
    const direccion = control.value;

    if (direccion == null || typeof direccion !== 'string') {
      return null; // Considerar válido si no hay valor
    }

    if (direccion.length < 2 || direccion.length > 60)
      return { formatoIncorrecto: true };

    return null; // El direccion es válido
  }

  validarFechaNacimientoAdulto(control: FormControl): ValidationErrors | null {
    const fechaNacimiento = new Date(control.value);
    const fechaActual = new Date();

    // Verificar si es una fecha válida
    if (isNaN(fechaNacimiento.getTime())) {
      return { fechaInvalida: true };
    }

    // Calcular la edad
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    // Verificar que la fecha no sea en el futuro
    if (fechaNacimiento > fechaActual) {
      return { fechaFutura: true };
    }

    // Verificar que la fecha no sea hace más de 120 años
    const hace120Anios = new Date();
    hace120Anios.setFullYear(hace120Anios.getFullYear() - 120);
    if (fechaNacimiento < hace120Anios) {
      return { fechaHace120Anios: true };
    }

    // Verificar que la edad sea mayor o igual a 18 años
    if (edad < 18) {
      return { menorDeEdad: true };
    }

    return null; // La fecha de nacimiento es válida para un adulto
  }

  validarFechaNacimientoMenor(control: FormControl): ValidationErrors | null {
    const fechaNacimiento = new Date(control.value);
    const fechaActual = new Date();

    // Verificar si es una fecha válida
    if (isNaN(fechaNacimiento.getTime())) {
      return { fechaInvalida: true };
    }

    // Calcular la edad
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    // Verificar que la fecha no sea en el futuro
    if (fechaNacimiento > fechaActual) {
      return { fechaFutura: true };
    }

    // Verificar que la edad sea menor de 18 años
    if (edad >= 18) {
      return { mayorDeEdad: true };
    }

    // Verificar que la fecha no sea reciente
    const fechaLimite = new Date();
    fechaLimite.setDate(fechaLimite.getDate() - 3); // Permitir hasta 3 días antes de la fecha actual
    if (fechaNacimiento >= fechaLimite) {
      return { fechaReciente: true };
    }

    return null; // La fecha de nacimiento es válida para un menor de edad
  }



  validateCodeSeguridad(control: FormControl): ValidationErrors | null {
    const code = control.value;
  
    if (code == null || typeof code !== 'string') {
      return null; // Considerar válido si no hay valor
    }
  
    // Cambiamos la validación a exactamente cuatro dígitos
    if (code.length !== 4 || !/^\d{4}$/.test(code)) {
      return { formatoIncorrecto: true };
    }
  
    return null;
  }
}
