import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerDoubleComponent } from './spinner-double/spinner-double.component';
import { SpinnerJumpComponent } from './spinner-jump/spinner-jump.component';
import { SpinnerShuffleComponent } from './spinner-shuffle/spinner-shuffle.component';
import { SpinnerShuffleCincoComponent } from './spinner-shuffle-cinco/spinner-shuffle-cinco.component';

@NgModule({
  declarations: [
    SpinnerDoubleComponent,
    SpinnerJumpComponent,
    SpinnerShuffleComponent,
    SpinnerShuffleCincoComponent,
  ],
  imports: [CommonModule],
  exports: [
    SpinnerDoubleComponent,
    SpinnerJumpComponent,
    SpinnerShuffleComponent,
    SpinnerShuffleCincoComponent,
  ],
})
export class SpinnerModule {}
