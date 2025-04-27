import {
  Component,
  forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { UbigeoService } from 'src/app/services/ubigeo/ubigeo.service';
import { UbigeoState } from 'src/app/shared/enums/ubigeo.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomProvinciasDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-provincias-dropdown',
  templateUrl: './custom-provincias-dropdown.component.html',
  styleUrls: ['./custom-provincias-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomProvinciasDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor, OnChanges
{
  private subscription: Subscription = new Subscription();
  provinciaControl: FormControl;

  provincias: Estandar[] = [];
  @Input() departamentoSelected: Estandar = new Estandar({
    id: 0,
    descripcion: '',
  });

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  isDisabled = false;
  value: Estandar;

  constructor(
    private readonly ubigeoService: UbigeoService,
    private readonly alertService: AlertService
  ) {
    this.provinciaControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {}

  resetComponent(): void {
    this.provinciaControl.reset();
    this.provincias = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['departamentoSelected'] &&
      !changes['departamentoSelected'].isFirstChange() &&
      changes['departamentoSelected'].currentValue &&
      changes['departamentoSelected'].currentValue.id != null
    ) {
      this.cargarProvincias(changes['departamentoSelected'].currentValue);
    }
  }

  private cargarProvincias(departamentoSelected: Estandar): void {
    if (!departamentoSelected || departamentoSelected.id == null) {
      this.provincias = [];
      this.provinciaControl.reset();
      return;
    }

    this.subscription.add(
      this.ubigeoService
        .listarUbigeoByIdPadre(UbigeoState.Provincia, departamentoSelected.id)
        .subscribe({
          next: (res: Estandar[]) => {
            this.provincias = res;
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

  writeValue(obj: Estandar): void {
    this.value = obj;
    this.provinciaControl.patchValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleValueChange(event: any): void {
    const selectedValue = event.value as Estandar; // Aseguramos el tipo
    if (!selectedValue || !selectedValue.id) return; // Validación
    this.onChange(selectedValue);
    this.onTouched();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
