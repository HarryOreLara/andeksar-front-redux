import {
  Component,
  forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {  Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { UbigeoService } from 'src/app/services/ubigeo/ubigeo.service';
import { UbigeoState } from 'src/app/shared/enums/ubigeo.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomDistritoDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-distrito-dropdown',
  templateUrl: './custom-distrito-dropdown.component.html',
  styleUrls: ['./custom-distrito-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomDistritoDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor, OnChanges
{
  private subscription: Subscription = new Subscription();

  distritoControl:FormControl;
  distritos: Estandar[] = [];
  @Input() provinciaSelected: Estandar = new Estandar({
    id: 0,
    descripcion: '',
  });

  onChange: (value: any) => void = () => {}; // Función que Angular ejecutará cuando el valor cambie
  onTouched: () => void = () => {}; // Función que Angular ejecutará cuando el control sea tocado
  isDisabled = false; // Estado de deshabilitado
  value: Estandar; // Valor actual del control

  constructor(
    private ubigeoService: UbigeoService,
    private alertService: AlertService,
  ) {
    this.distritoControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    }); 
  }

  ngOnInit(): void {

  }


  resetComponent(): void {
    this.distritoControl.reset();
    this.distritos = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['provinciaSelected'] &&
      !changes['provinciaSelected'].isFirstChange() &&
      changes['provinciaSelected'].currentValue &&
      changes['provinciaSelected'].currentValue.id != null
    ) {
      this.loadDistrito(changes['provinciaSelected'].currentValue);
    }
  }

  loadDistrito(provinciaSelected: Estandar): void {
    if (!provinciaSelected || provinciaSelected.id == null) {
      this.distritos = [];
      return;
    }

    this.subscription.add(
      this.ubigeoService
        .listarUbigeoByIdPadre(UbigeoState.Distrito, provinciaSelected.id)
        .subscribe({
          next: (res) => {
            this.distritos = res;
          },
          error: (error) => {
            this.alertService.showError(
              'Error',
              'Error al cargar los distritos'
            );
          },
        })
    );
  }

  // Métodos de ControlValueAccessor
  writeValue(obj: Estandar): void {
    this.value = obj; // Asignar el valor
    this.distritoControl.patchValue(obj); // Actualiza el valor en el control
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
