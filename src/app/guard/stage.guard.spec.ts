import { TestBed } from '@angular/core/testing';

import { StageGuard } from './stage.guard';

describe('StageGuard', () => {
  let guard: StageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
