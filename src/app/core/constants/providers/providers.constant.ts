import { MessageService } from 'primeng/api';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CustomErrorService, ValidatorsService } from 'src/app/shared/shared';

export const PROVIDERS_CONSTANT = [
  CustomErrorService,
  ValidatorsService,
  MessageService,
  AlertService,
];
