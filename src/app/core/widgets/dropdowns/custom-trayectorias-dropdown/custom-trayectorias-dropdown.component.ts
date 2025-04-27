import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { TrayectoriaService } from 'src/app/services/trayectoria/trayectoria.service';
import { convertToTrayectoriaDropwdown } from 'src/app/shared/functions/dropwdowns/dropdowns.fuctions';
import { DireccionesReactivasService } from 'src/app/shared/helpers/orden/direcciones-reactivas.service';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomTrayectoriasDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-trayectorias-dropdown',
  templateUrl: './custom-trayectorias-dropdown.component.html',
  styleUrls: ['./custom-trayectorias-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomTrayectoriasDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private readonly subscription: Subscription = new Subscription();
  trayectorias: Estandar[] = [];
  trayectoriaControl: FormControl;


  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  isDisabled = false;
  value: Estandar;

  origen: Estandar = new Estandar();
  destino: Estandar = new Estandar();

  constructor(
    private readonly alertService: AlertService,
    private readonly trayectoriaService: TrayectoriaService,
    private readonly direccionesReactivasService: DireccionesReactivasService
  ) {
    this.trayectoriaControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.direccionesReactivasService.agenciaRemitente$.subscribe({
        next: (agencia) => {
          this.origen = agencia;
          if (this.origen.id == 0) return;
          this.loadTrayectorias(this.origen, this.destino);
        },
        error: (error) => {},
      })
    );

    this.subscription.add(
      this.direccionesReactivasService.agenciaDestinatario$.subscribe({
        next: (agencia) => {
          if (agencia.id == 0) return;
          this.destino = agencia;
          if (this.destino.id == 0) return;

          this.loadTrayectorias(this.origen, this.destino);
        },
        error: (error) => {},
      })
    );
  }

  loadTrayectorias(origen: Estandar, destino: Estandar): void {
    if (origen.id == 0 || origen.id == undefined) return;
    if (destino.id == 0 || destino.id == undefined) return;

    const trayectoria = convertToTrayectoriaDropwdown(origen, destino);

    this.subscription.add(
      this.trayectoriaService
        .buscarTrayectoriaService$(trayectoria)
        .subscribe({
          next: (trayectorias: Estandar[]) => {
            this.trayectorias = trayectorias;
          },
          error: (error) => {
            let message = error.error.message
              ? error.error.message
              : 'Error al cargar los contactos';

            this.alertService.showError('Error', message);
          },
        })
    );
  }

  writeValue(obj: Estandar): void {
    this.value = obj;
    this.trayectoriaControl.patchValue(obj);
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
    const selectedValue = event.value;
    this.onChange(selectedValue);
    this.onTouched();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
