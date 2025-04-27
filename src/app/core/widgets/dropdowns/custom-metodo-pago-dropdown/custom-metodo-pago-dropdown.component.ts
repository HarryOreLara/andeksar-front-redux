import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { MetodoPagoService } from 'src/app/services/metodo-pago/metodo-pago.service';
import { AlertService } from 'src/app/shared/services/alert.service';


const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomMetodoPagoDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-metodo-pago-dropdown',
  templateUrl: './custom-metodo-pago-dropdown.component.html',
  styleUrls: ['./custom-metodo-pago-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomMetodoPagoDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private readonly subscription: Subscription = new Subscription();

  metodosPagoDropdown$: Observable<Estandar[]> =
    this.metodoPagoService.metodosPagoDropdown$;

  metodoPagoControl: FormControl;

  onChange: (value: any) => void = () => {}; // Función que Angular ejecutará cuando el valor cambie
  onTouched: () => void = () => {}; // Función que Angular ejecutará cuando el control sea tocado
  isDisabled = false; // Estado de deshabilitado
  value: Estandar; // Valor actual del control

  constructor(
    private readonly metodoPagoService: MetodoPagoService,
    private readonly alertService: AlertService
  ) {
    this.metodoPagoControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    // this.cargarMetodosPago();
  }

  // cargarMetodosPago(): void {
  //   this.subscription.add(
  //     this.metodoPagoService.listarMetodoPagoComboService$()
  //     .subscribe({
  //       next: (data:Estandar[]) => {
  //         this.metodoPagos = data;
  //       },
  //       error: (err) => {
  //         this.alertService.showError('Ups..!!', 'Error al cargar los métodos de pago');
  //       },
  //     })
  //   );
  // }

  // Métodos de ControlValueAccessor
  writeValue(obj: Estandar): void {
    this.value = obj; // Asignar el valor
    this.metodoPagoControl.patchValue(obj); // Actualiza el valor en el control
  }

  registerOnChange(fn: any): void {
    this.onChange = fn; // Registra la función para manejar cambios de valor
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn; // Registra la función para manejar el evento "tocado"
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled; // Asigna el estado de deshabilitado
    if (isDisabled) {
      this.metodoPagoControl.disable(); // Deshabilita el control
    } else {
      this.metodoPagoControl.enable(); // Habilita el control
    }
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
