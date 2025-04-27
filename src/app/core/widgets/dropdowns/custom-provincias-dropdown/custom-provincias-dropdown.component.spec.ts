import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProvinciasDropdownComponent } from './custom-provincias-dropdown.component';

describe('CustomProvinciasDropdownComponent', () => {
  let component: CustomProvinciasDropdownComponent;
  let fixture: ComponentFixture<CustomProvinciasDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomProvinciasDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomProvinciasDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
