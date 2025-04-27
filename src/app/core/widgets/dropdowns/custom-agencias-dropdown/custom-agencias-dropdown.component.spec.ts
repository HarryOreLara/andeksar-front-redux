import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAgenciasDropdownComponent } from './custom-agencias-dropdown.component';

describe('CustomAgenciasDropdownComponent', () => {
  let component: CustomAgenciasDropdownComponent;
  let fixture: ComponentFixture<CustomAgenciasDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomAgenciasDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomAgenciasDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
