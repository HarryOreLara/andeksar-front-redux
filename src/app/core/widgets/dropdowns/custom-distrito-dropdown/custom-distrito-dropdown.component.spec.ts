import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDistritoDropdownComponent } from './custom-distrito-dropdown.component';

describe('CustomDistritoDropdownComponent', () => {
  let component: CustomDistritoDropdownComponent;
  let fixture: ComponentFixture<CustomDistritoDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDistritoDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomDistritoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
