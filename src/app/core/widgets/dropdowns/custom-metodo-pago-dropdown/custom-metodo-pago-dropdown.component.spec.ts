import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMetodoPagoDropdownComponent } from './custom-metodo-pago-dropdown.component';

describe('CustomMetodoPagoDropdownComponent', () => {
  let component: CustomMetodoPagoDropdownComponent;
  let fixture: ComponentFixture<CustomMetodoPagoDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMetodoPagoDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomMetodoPagoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
