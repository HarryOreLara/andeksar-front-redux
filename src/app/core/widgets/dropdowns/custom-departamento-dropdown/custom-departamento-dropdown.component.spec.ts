import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDepartamentoDropdownComponent } from './custom-departamento-dropdown.component';

describe('CustomDepartamentoDropdownComponent', () => {
  let component: CustomDepartamentoDropdownComponent;
  let fixture: ComponentFixture<CustomDepartamentoDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDepartamentoDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomDepartamentoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
