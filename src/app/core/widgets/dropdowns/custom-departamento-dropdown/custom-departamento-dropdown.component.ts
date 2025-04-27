import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { UbigeoService } from 'src/app/services/ubigeo/ubigeo.service';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomDepartamentoDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-departamento-dropdown',
  templateUrl: './custom-departamento-dropdown.component.html',
  styleUrls: ['./custom-departamento-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomDepartamentoDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private readonly subscription: Subscription = new Subscription();
  departamentoControl: FormControl;

  departamento: Estandar[] = [];

  onChange: (value: any) => void = () => {}; // Función que Angular ejecutará cuando el valor cambie
  onTouched: () => void = () => {}; // Función que Angular ejecutará cuando el control sea tocado
  isDisabled = false; // Estado de deshabilitado
  value: Estandar; // Valor actual del control

  constructor(
    private ubigeoService: UbigeoService,
    private alertService: AlertService
  ) {
    this.departamentoControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.cargarDepartamentos();
  }

  resetComponent(): void {
    this.departamentoControl.reset();
    this.departamento = [];
  }

  private cargarDepartamentos() {
    this.subscription.add(
      this.ubigeoService.listarUbigeoByIdPadre().subscribe({
        next: (res: Estandar[]) => {
          this.departamento = res;
        },
        error: (error) => {
          this.alertService.showError(
            'Error',
            'Error al cargar los departamentos'
          );
        },
      })
    );
  }

  // Métodos de ControlValueAccessor
  writeValue(obj: Estandar): void {
    this.value = obj; // Asignar el valor
    this.departamentoControl.patchValue(obj); // Actualiza el valor en el control
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
