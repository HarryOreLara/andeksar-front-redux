import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedThemeServicesModule } from '../../themes/services/shared.theme.services.module';
import { TipoDocumentoComponent } from './tipo-documento/tipo-documento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperacionesPrimeNgModule } from '../../themes/modules/modules';
import { CustomAgenciasDropdownComponent } from './custom-agencias-dropdown/custom-agencias-dropdown.component';
import { TipoRecepcionDropdownComponent } from './tipo-recepcion-dropdown/tipo-recepcion-dropdown.component';

import { CustomUnidadMedidaDropdownComponent } from './custom-unidad-medida-dropdown/custom-unidad-medida-dropdown.component';
import { CustomDepartamentoDropdownComponent } from './custom-departamento-dropdown/custom-departamento-dropdown.component';
import { CustomProvinciasDropdownComponent } from './custom-provincias-dropdown/custom-provincias-dropdown.component';
import { CustomDistritoDropdownComponent } from './custom-distrito-dropdown/custom-distrito-dropdown.component';
import { CustomDireccionRemitenteComponent } from './custom-direccion-remitente/custom-direccion-remitente.component';
import { CustomDireccionDestinatarioComponent } from './custom-direccion-destinatario/custom-direccion-destinatario.component';
import { CustomFormaPagoDropdownComponent } from './custom-forma-pago-dropdown/custom-forma-pago-dropdown.component';
import { CustomTrayectoriasDropdownComponent } from './custom-trayectorias-dropdown/custom-trayectorias-dropdown.component';
import { CustomVehiculoDropdownComponent } from './custom-vehiculo-dropdown/custom-vehiculo-dropdown.component';
import { CustomEstadoVehiculoDropdownComponent } from './custom-estado-vehiculo-dropdown/custom-estado-vehiculo-dropdown.component';
import { CustomMetodoPagoDropdownComponent } from './custom-metodo-pago-dropdown/custom-metodo-pago-dropdown.component';
import { CustomTipoLicenciaDropdownComponent } from './custom-tipo-licencia-dropdown/custom-tipo-licencia-dropdown.component';
import { CustomPerfilesDropdownComponent } from './custom-perfiles-dropdown/custom-perfiles-dropdown.component';
import { CustomTipoAgenciaDropdownComponent } from './custom-tipo-agencia-dropdown/custom-tipo-agencia-dropdown.component';

@NgModule({
  declarations: [
    TipoDocumentoComponent,
    CustomAgenciasDropdownComponent,
    TipoRecepcionDropdownComponent,
    CustomUnidadMedidaDropdownComponent,
    CustomDepartamentoDropdownComponent,
    CustomProvinciasDropdownComponent,
    CustomDistritoDropdownComponent,
    CustomDireccionRemitenteComponent,
    CustomDireccionDestinatarioComponent,
    CustomFormaPagoDropdownComponent,
    CustomTrayectoriasDropdownComponent,
    CustomVehiculoDropdownComponent,
    CustomEstadoVehiculoDropdownComponent,
    CustomMetodoPagoDropdownComponent,
    CustomTipoLicenciaDropdownComponent,
    CustomPerfilesDropdownComponent,
    CustomTipoAgenciaDropdownComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedThemeServicesModule,
    OperacionesPrimeNgModule,
  ],
  exports: [
    TipoDocumentoComponent,
    CustomAgenciasDropdownComponent,
    TipoRecepcionDropdownComponent,
    CustomUnidadMedidaDropdownComponent,
    CustomDepartamentoDropdownComponent,
    CustomProvinciasDropdownComponent,
    CustomDistritoDropdownComponent,
    CustomDireccionRemitenteComponent,
    CustomDireccionDestinatarioComponent,
    CustomFormaPagoDropdownComponent,
    CustomTrayectoriasDropdownComponent,
    CustomVehiculoDropdownComponent,
    CustomEstadoVehiculoDropdownComponent,
    CustomMetodoPagoDropdownComponent,
    CustomTipoLicenciaDropdownComponent,
    CustomPerfilesDropdownComponent,
    CustomTipoAgenciaDropdownComponent,
  ],
})
export class CustomDropdownsModule {}
