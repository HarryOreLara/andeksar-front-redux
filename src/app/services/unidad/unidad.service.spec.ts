import { TestBed } from '@angular/core/testing';

import { UnidadMedidaService } from './unidad.service';

describe('UnidadMedidaService', () => {
  let service: UnidadMedidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadMedidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
