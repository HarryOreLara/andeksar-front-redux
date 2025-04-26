import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilesComponent } from './perfiles.component';
import { PerfilesRoutingModule } from './perfiles-routing.module';
import { AccesosPrimeNgModule } from 'src/app/core/themes/modules/modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDropdownsModule } from 'src/app/core/widgets/dropdowns/custom-dropdowns.module';
import { SharedAccesosModule } from 'src/app/core/components/shared-accesos.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
// import { CustomDropdownsModule } from 'src/app/core/widgets/dropdowns/custom-dropdowns.module';
// import { SharedAccesosModule } from 'src/app/core/components/accesos/shared-accesos.module';
// import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';



@NgModule({
  declarations: [
    PerfilesComponent
  ],
  imports: [
    CommonModule,
    PerfilesRoutingModule,
    AccesosPrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    CustomDropdownsModule,
    SharedAccesosModule,
    SharedDirectivesModule
  ]
})
export class PerfilesModule { }
