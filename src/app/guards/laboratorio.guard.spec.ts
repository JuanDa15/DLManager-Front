import { TestBed } from '@angular/core/testing';

import { LaboratorioGuard } from './laboratorio.guard';

describe('LaboratorioGuard', () => {
  let guard: LaboratorioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LaboratorioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
