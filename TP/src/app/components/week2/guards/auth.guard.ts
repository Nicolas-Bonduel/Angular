import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isAuthentified().pipe(
    map(() => true),
    catchError(() => of(false)),
    map( (isLoggedIn) => {
      if (!isLoggedIn) {
        localStorage.setItem('redirect_after_login','/week2');
        router.navigate(['/login']);
        return false;
      }
      else
        return true;
    })
  );
};
