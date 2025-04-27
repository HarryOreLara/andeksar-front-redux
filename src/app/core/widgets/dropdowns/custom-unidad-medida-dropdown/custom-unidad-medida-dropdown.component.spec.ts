import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUnidadMedidaDropdownComponent } from './custom-unidad-medida-dropdown.component';

describe('CustomUnidadMedidaDropdownComponent', () => {
  let component: CustomUnidadMedidaDropdownComponent;
  let fixture: ComponentFixture<CustomUnidadMedidaDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomUnidadMedidaDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomUnidadMedidaDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
