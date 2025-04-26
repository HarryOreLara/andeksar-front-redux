import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerShuffleCincoComponent } from './spinner-shuffle-cinco.component';

describe('SpinnerShuffleCincoComponent', () => {
  let component: SpinnerShuffleCincoComponent;
  let fixture: ComponentFixture<SpinnerShuffleCincoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerShuffleCincoComponent]
    });
    fixture = TestBed.createComponent(SpinnerShuffleCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
