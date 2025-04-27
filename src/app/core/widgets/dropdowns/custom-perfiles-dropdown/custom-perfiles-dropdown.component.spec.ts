import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPerfilesDropdownComponent } from './custom-perfiles-dropdown.component';

describe('CustomPerfilesDropdownComponent', () => {
  let component: CustomPerfilesDropdownComponent;
  let fixture: ComponentFixture<CustomPerfilesDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPerfilesDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomPerfilesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
