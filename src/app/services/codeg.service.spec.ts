import { TestBed } from '@angular/core/testing';

import { CodegService } from './codeg.service';

describe('CodegService', () => {
  let service: CodegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
