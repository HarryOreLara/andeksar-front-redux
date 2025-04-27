import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {  Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { FormaPagoService } from 'src/app/services/forma-pago/forma-pago.service';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomFormaPagoDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-forma-pago-dropdown',
  templateUrl: './custom-forma-pago-dropdown.component.html',
  styleUrls: ['./custom-forma-pago-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomFormaPagoDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private subscription: Subscription = new Subscription();
  formsPayment: Estandar[] = [];  
  formaPagoControl: FormControl;

  onChange: (value: any) => void = () => {}; // Función que Angular ejecutará cuando el valor cambie
  onTouched: () => void = () => {}; // Función que Angular ejecutará cuando el control sea tocado
  isDisabled = false; // Estado de deshabilitado
  value: Estandar; // Valor actual del control

  constructor(
    private alertService: AlertService,
    private formaPagoService: FormaPagoService
  ) {
    this.formaPagoControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.loadFormsPayment();
  }

  loadFormsPayment(): void {
    this.subscription.add(
      this.formaPagoService
        .obtenerFormaPagoService$()
        .subscribe({
          next: (res: Estandar[]) => {
            this.formsPayment = res;
          },
          error: (err) => {
            this.alertService.showError(
              'Ups..!!',
              'Las formas de pago no se cargaron correctamente. Contacte con el administrador'
            );
          },
        })
    );
  }

  // Métodos de ControlValueAccessor
  writeValue(obj: Estandar): void {
    this.value = obj; // Asignar el valor
    this.formaPagoControl.patchValue(obj); // Actualiza el valor en el control
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
