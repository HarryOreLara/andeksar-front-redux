import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTrayectoriasDropdownComponent } from './custom-trayectorias-dropdown.component';

describe('CustomTrayectoriasDropdownComponent', () => {
  let component: CustomTrayectoriasDropdownComponent;
  let fixture: ComponentFixture<CustomTrayectoriasDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTrayectoriasDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomTrayectoriasDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
