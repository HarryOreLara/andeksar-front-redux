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
  useExisting: forwardRef(() => CustomVehiculoDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-vehiculo-dropdown',
  templateUrl: './custom-vehiculo-dropdown.component.html',
  styleUrls: ['./custom-vehiculo-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomVehiculoDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private subscription: Subscription = new Subscription();
  vehiculoControl: FormControl;

  vehiculos: Estandar[] = [];
  @Input() label: string = 'Vehículo';

  onChange: (value: any) => void = () => {}; // Función que Angular ejecutará cuando el valor cambie
  onTouched: () => void = () => {}; // Función que Angular ejecutará cuando el control sea tocado
  isDisabled = false; // Estado de deshabilitado
  value: Estandar; // Valor actual del control

  constructor(
    private vehiculoService: VehiculoService,
    private alertService: AlertService
  ) {
    this.vehiculoControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.cargarVehiculos();
  }

  private cargarVehiculos() {
    this.subscription.add(
      this.vehiculoService.listarVehiculoDropdownService$().subscribe({
        next: (data) => {
          this.vehiculos = data;
        },
        error: (error) => {
          this.alertService.showError('Ups..', 'Error al cargar los vehículos');
        },
      })
    );
  }

  // Métodos de ControlValueAccessor
  writeValue(obj: Estandar): void {
    this.value = obj; // Asignar el valor
    this.vehiculoControl.patchValue(obj); // Actualiza el valor en el control
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
