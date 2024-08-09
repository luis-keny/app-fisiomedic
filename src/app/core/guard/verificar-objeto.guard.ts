import { CanActivateFn } from '@angular/router';
import { existeLocalStorage } from '../index.function';

export const verificarObjetoGuard: CanActivateFn = (route, state) => {
  const { value } = route.data;
  if (!value) return false;
  return existeLocalStorage(value);
};
