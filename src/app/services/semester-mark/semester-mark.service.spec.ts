import { TestBed } from '@angular/core/testing';

import { SemesterMarkService } from './semester-mark.service';

describe('SemesterMarkService', () => {
  let service: SemesterMarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemesterMarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
