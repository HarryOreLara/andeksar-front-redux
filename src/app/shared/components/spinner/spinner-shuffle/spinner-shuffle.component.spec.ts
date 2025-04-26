import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerShuffleComponent } from './spinner-shuffle.component';

describe('SpinnerShuffleComponent', () => {
  let component: SpinnerShuffleComponent;
  let fixture: ComponentFixture<SpinnerShuffleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerShuffleComponent]
    });
    fixture = TestBed.createComponent(SpinnerShuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
