import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVehiculoDropdownComponent } from './custom-vehiculo-dropdown.component';

describe('CustomVehiculoDropdownComponent', () => {
  let component: CustomVehiculoDropdownComponent;
  let fixture: ComponentFixture<CustomVehiculoDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomVehiculoDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomVehiculoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
