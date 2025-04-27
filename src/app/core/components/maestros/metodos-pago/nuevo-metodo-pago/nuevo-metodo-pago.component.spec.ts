import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMetodoPagoComponent } from './nuevo-metodo-pago.component';

describe('NuevoMetodoPagoComponent', () => {
  let component: NuevoMetodoPagoComponent;
  let fixture: ComponentFixture<NuevoMetodoPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoMetodoPagoComponent]
    });
    fixture = TestBed.createComponent(NuevoMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
