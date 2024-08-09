import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { verificarObjetoGuard } from './verificar-objeto.guard';

describe('verificarObjetoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verificarObjetoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
