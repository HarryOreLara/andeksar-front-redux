import {
  Component,
  forwardRef,
  OnDestroy,
  OnInit,
  Signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { UnidadMedidaService } from 'src/app/services/unidad/unidad.service';
import { TablaSunat } from 'src/app/shared/enums';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TipoDocumentoComponent),
  multi: true,
};

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html',
  styleUrls: ['./tipo-documento.component.css'],
  providers: [VALUE_ACCESOR],
})
export class TipoDocumentoComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private subscription: Subscription = new Subscription();
  tipoDocumentoControl: FormControl;
  typeDocuments: Estandar[] = []; //Lista de tipos de documentos

  onChange: (value: any) => void = () => {}; // Función que Angular ejecutará cuando el valor cambie
  onTouched: () => void = () => {}; // Función que Angular ejecutará cuando el control sea tocado
  isDisabled = false; // Estado de deshabilitado
  value: Signal<string>; // Valor actual del control

  constructor(
    private alertService: AlertService,
    private unidadMedidaService:UnidadMedidaService
  ) {
    this.tipoDocumentoControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.loadTypeDocuments();
  }



  private loadTypeDocuments() {
    this.subscription.add(
      this.unidadMedidaService
        .listarUnidadMedidaService$(TablaSunat.TIPO_DOCUMENTO)
        .subscribe({
          next: (res: Estandar[]) => {
            this.typeDocuments = res;
          },
          error: (err) => {
            this.alertService.showError(
              'Ups..!!',
              'Los documentos no cargaron correctamente. Contacte con el administrador'
            );
          },
        })
    );
  }




  // Métodos de ControlValueAccessor
  writeValue(obj: any): void {
    this.value = obj; // Establece el valor inicial del control
    this.tipoDocumentoControl.patchValue(obj); // Actualiza el valor en el control
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
    this.value = event.value; // Actualiza el valor del control
    this.onChange(this.value); // Notifica a Angular del cambio de valor
    this.onTouched(); // Marca el control como "tocado"
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
