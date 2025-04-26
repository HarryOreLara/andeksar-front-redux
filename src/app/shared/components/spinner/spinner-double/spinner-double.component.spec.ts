import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerDoubleComponent } from './spinner-double.component';

describe('SpinnerDoubleComponent', () => {
  let component: SpinnerDoubleComponent;
  let fixture: ComponentFixture<SpinnerDoubleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerDoubleComponent]
    });
    fixture = TestBed.createComponent(SpinnerDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
