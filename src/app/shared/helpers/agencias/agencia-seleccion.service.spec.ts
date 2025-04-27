import { TestBed } from '@angular/core/testing';

import { AgenciaSeleccionService } from './agencia-seleccion.service';

describe('AgenciaSeleccionService', () => {
  let service: AgenciaSeleccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenciaSeleccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
