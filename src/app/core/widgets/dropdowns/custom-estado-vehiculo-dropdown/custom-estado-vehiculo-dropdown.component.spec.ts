import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEstadoVehiculoDropdownComponent } from './custom-estado-vehiculo-dropdown.component';

describe('CustomEstadoVehiculoDropdownComponent', () => {
  let component: CustomEstadoVehiculoDropdownComponent;
  let fixture: ComponentFixture<CustomEstadoVehiculoDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomEstadoVehiculoDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomEstadoVehiculoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
