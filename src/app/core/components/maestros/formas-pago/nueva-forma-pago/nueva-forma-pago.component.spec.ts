import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaFormaPagoComponent } from './nueva-forma-pago.component';

describe('NuevaFormaPagoComponent', () => {
  let component: NuevaFormaPagoComponent;
  let fixture: ComponentFixture<NuevaFormaPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaFormaPagoComponent]
    });
    fixture = TestBed.createComponent(NuevaFormaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
