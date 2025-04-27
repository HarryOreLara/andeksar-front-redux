import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDireccionDestinatarioComponent } from './custom-direccion-destinatario.component';

describe('CustomDireccionDestinatarioComponent', () => {
  let component: CustomDireccionDestinatarioComponent;
  let fixture: ComponentFixture<CustomDireccionDestinatarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDireccionDestinatarioComponent]
    });
    fixture = TestBed.createComponent(CustomDireccionDestinatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
