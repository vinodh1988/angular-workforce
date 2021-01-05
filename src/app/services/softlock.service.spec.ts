import { TestBed } from '@angular/core/testing';

import { SoftlockService } from './softlock.service';

describe('SoftlockService', () => {
  let service: SoftlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
