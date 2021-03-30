import { TestBed } from '@angular/core/testing';

import { UpdateopService } from './updateop.service';

describe('UpdateopService', () => {
  let service: UpdateopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
