import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAgenciaComponent } from './nueva-agencia.component';

describe('NuevaAgenciaComponent', () => {
  let component: NuevaAgenciaComponent;
  let fixture: ComponentFixture<NuevaAgenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaAgenciaComponent]
    });
    fixture = TestBed.createComponent(NuevaAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
