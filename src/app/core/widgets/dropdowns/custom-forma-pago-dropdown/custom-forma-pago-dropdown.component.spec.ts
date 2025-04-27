import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormaPagoDropdownComponent } from './custom-forma-pago-dropdown.component';

describe('CustomFormaPagoDropdownComponent', () => {
  let component: CustomFormaPagoDropdownComponent;
  let fixture: ComponentFixture<CustomFormaPagoDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomFormaPagoDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomFormaPagoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
