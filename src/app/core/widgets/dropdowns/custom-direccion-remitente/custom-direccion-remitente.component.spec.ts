import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDireccionRemitenteComponent } from './custom-direccion-remitente.component';

describe('CustomDireccionRemitenteComponent', () => {
  let component: CustomDireccionRemitenteComponent;
  let fixture: ComponentFixture<CustomDireccionRemitenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDireccionRemitenteComponent]
    });
    fixture = TestBed.createComponent(CustomDireccionRemitenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
