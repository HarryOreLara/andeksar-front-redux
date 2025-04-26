import { NgModule } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  imports: [],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class SharedThemeServicesModule {}