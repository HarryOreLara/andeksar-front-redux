import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { VehiculoService } from 'src/app/services/vehiculo/vehiculo.service';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomEstadoVehiculoDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-estado-vehiculo-dropdown',
  templateUrl: './custom-estado-vehiculo-dropdown.component.html',
  styleUrls: ['./custom-estado-vehiculo-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomEstadoVehiculoDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private subscription: Subscription = new Subscription();
  estadosVehiculoControl: FormControl;

  estadosVehiculo: Estandar[] = [];
  @Input() label: string = 'Estado de Vehiculo';

  onChange: (value: any) => void = () => {}; // Función que Angular ejecutará cuando el valor cambie
  onTouched: () => void = () => {}; // Función que Angular ejecutará cuando el control sea tocado
  isDisabled = false; // Estado de deshabilitado
  value: Estandar; // Valor actual del control

  constructor(
    private vehiculoService: VehiculoService,
    private alertService: AlertService
  ) {
    this.estadosVehiculoControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.cargarEstadosVehiculo();
  }

  private cargarEstadosVehiculo() {
    this.subscription.add(
      this.vehiculoService
        .listarEstadosVehiculoDropdownService$()
        .subscribe({
          next: (response) => {
            this.estadosVehiculo = response;
          },
          error: (err) => {
            this.alertService.showError(
              'Ups..',
              'Error al cargar los estados de vehículo'
            );
          },
        })
    );
  }

  // Métodos de ControlValueAccessor
  writeValue(obj: Estandar): void {
    this.value = obj; // Asignar el valor
    this.estadosVehiculoControl.patchValue(obj); // Actualiza el valor en el control
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
