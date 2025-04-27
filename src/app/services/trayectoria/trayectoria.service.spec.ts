import { TestBed } from '@angular/core/testing';

import { TrayectoriaService } from './trayectoria.service';

describe('TrayectoriaService', () => {
  let service: TrayectoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrayectoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
