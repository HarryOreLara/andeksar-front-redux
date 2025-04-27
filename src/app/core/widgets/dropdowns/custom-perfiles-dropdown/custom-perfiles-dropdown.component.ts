import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { PerfilService } from 'src/app/core/services/perfil/perfil.service';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomPerfilesDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-perfiles-dropdown',
  templateUrl: './custom-perfiles-dropdown.component.html',
  styleUrls: ['./custom-perfiles-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomPerfilesDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private subscription: Subscription = new Subscription();
  perfiles: Estandar[]; //Agencias
  @Input() label: string = 'Perfiles'; // Etiqueta del control
  @Input() state: string = 'Perfiles'; // Estado del control

  onChange: (value: any) => void = () => {}; // Función que Angular ejecutará cuando el valor cambie
  onTouched: () => void = () => {}; // Función que Angular ejecutará cuando el control sea tocado
  isDisabled = false; // Estado de deshabilitado
  value: Estandar; // Valor actual del control

  perfilesControl: FormControl;

  constructor(
    private readonly perfilService: PerfilService,
    private readonly alertService: AlertService
  ) {
    this.perfilesControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.cargarPerfiles();
  }

  cargarPerfiles() {
    this.subscription.add(
      this.perfilService
        .listarPerfilService$()
        .subscribe({
          next: (perfiles) => {
            this.perfiles = perfiles;
          },
          error: (error) => {
            this.alertService.showError(
              'Ups..',
              'Error al cargar los perfiles'
            );
          },
        })
    );
  }

  // Métodos de ControlValueAccessor
  writeValue(obj: Estandar): void {
    this.value = obj;
    this.perfilesControl.patchValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    if (isDisabled) {
      this.perfilesControl.disable({ emitEvent: false });
    } else {
      this.perfilesControl.enable({ emitEvent: false });
    }
  }

  handleValueChange(event: any): void {
    const selectedValue = event.value;
    this.onChange(selectedValue);
    this.onTouched();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
