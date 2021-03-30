import { TestBed } from '@angular/core/testing';

import { TokenmanagerService } from './tokenmanager.service';

describe('TokenmanagerService', () => {
  let service: TokenmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
