import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { TipoLicenciaService } from 'src/app/services/tipo-licencia/tipo-licencia.service';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomTipoLicenciaDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-tipo-licencia-dropdown',
  templateUrl: './custom-tipo-licencia-dropdown.component.html',
  styleUrls: ['./custom-tipo-licencia-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomTipoLicenciaDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private readonly subscription: Subscription = new Subscription();

  tiposLicencia: Estandar[] = [];
  tipoLicenciaControl: FormControl;

  onChange: (value: any) => void = () => {}; // Función que Angular ejecutará cuando el valor cambie
  onTouched: () => void = () => {}; // Función que Angular ejecutará cuando el control sea tocado
  isDisabled = false; // Estado de deshabilitado
  value: Estandar; // Valor actual del control

  constructor(
    private readonly tipoLicenciaService: TipoLicenciaService,
    private alertService: AlertService
  ) {
    this.tipoLicenciaControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.cargarTiposLicencia();
  }

  cargarTiposLicencia() {

    this.subscription.add(
      this.tipoLicenciaService
        .listarTipoLicenciaDropdownService$()
        .subscribe({
          next: (response) => {
            this.tiposLicencia = response;
          },
          error: (error) => {
            this.alertService.showError(
              'Ups..',
              'Error al cargar los tipos de licencia'
            );
          },
        })
    );
  }

  // Métodos de ControlValueAccessor
  writeValue(obj: Estandar): void {
    this.value = obj; // Asignar el valor
    this.tipoLicenciaControl.patchValue(obj); // Actualiza el valor en el control
  }

  registerOnChange(fn: any): void {
    this.onChange = fn; // Registra la función para manejar cambios de valor
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn; // Registra la función para manejar el evento "tocado"
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled; // Cambia el estado de deshabilitado
  }

  handleValueChange(event: any): void {
    const selectedValue = event.value; // Captura el valor seleccionado
    this.onChange(selectedValue); // Notifica al formulario reactivo
    this.onTouched(); // Marca el control como "tocado"
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
