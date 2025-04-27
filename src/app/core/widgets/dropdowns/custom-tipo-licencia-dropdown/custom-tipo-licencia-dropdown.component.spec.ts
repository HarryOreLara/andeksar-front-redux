import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTipoLicenciaDropdownComponent } from './custom-tipo-licencia-dropdown.component';

describe('CustomTipoLicenciaDropdownComponent', () => {
  let component: CustomTipoLicenciaDropdownComponent;
  let fixture: ComponentFixture<CustomTipoLicenciaDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTipoLicenciaDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomTipoLicenciaDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
