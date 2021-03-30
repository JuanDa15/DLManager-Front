import { TestBed } from '@angular/core/testing';

import { OdontologoGuard } from './odontologo.guard';

describe('OdontologoGuard', () => {
  let guard: OdontologoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OdontologoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
