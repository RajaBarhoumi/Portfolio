import { TestBed } from '@angular/core/testing';

import { CnxService } from './cnx.service';

describe('CnxService', () => {
  let service: CnxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
