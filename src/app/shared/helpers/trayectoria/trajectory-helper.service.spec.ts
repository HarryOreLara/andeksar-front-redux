import { TestBed } from '@angular/core/testing';

import { TrajectoryHelperService } from './trajectory-helper.service';

describe('TrajectoryHelperService', () => {
  let service: TrajectoryHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrajectoryHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
