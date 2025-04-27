import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { CTIPO_AGENCIA_STATE } from 'src/app/core/constants/genericos/CGenericos.constant';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomTipoAgenciaDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-tipo-agencia-dropdown',
  templateUrl: './custom-tipo-agencia-dropdown.component.html',
  styleUrls: ['./custom-tipo-agencia-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomTipoAgenciaDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  tipoAgencias: Estandar[] = CTIPO_AGENCIA_STATE;
  tipoAgenciasControl: FormControl;
  @Input() label: string = 'Perfiles';
  @Input() filterBy: string = 'descripcion';
  @Input() filter:boolean = true;
  @Input() optionLabel: string = 'descripcion';

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  isDisabled = false;
  value: Estandar;

  constructor(private readonly alertService: AlertService) {
    this.tipoAgenciasControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {}

  // Métodos de ControlValueAccessor
  writeValue(obj: Estandar): void {
    this.value = obj;
    this.tipoAgenciasControl.patchValue(obj);
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
      this.tipoAgenciasControl.disable({ emitEvent: false });
    } else {
      this.tipoAgenciasControl.enable({ emitEvent: false });
    }
  }

  handleValueChange(event: any): void {
    const selectedValue = event.value;
    this.onChange(selectedValue);
    this.onTouched();
  }

  ngOnDestroy(): void {}
}
