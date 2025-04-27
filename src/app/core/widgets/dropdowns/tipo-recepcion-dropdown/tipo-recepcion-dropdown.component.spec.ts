import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRecepcionDropdownComponent } from './tipo-recepcion-dropdown.component';

describe('TipoRecepcionDropdownComponent', () => {
  let component: TipoRecepcionDropdownComponent;
  let fixture: ComponentFixture<TipoRecepcionDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoRecepcionDropdownComponent]
    });
    fixture = TestBed.createComponent(TipoRecepcionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
