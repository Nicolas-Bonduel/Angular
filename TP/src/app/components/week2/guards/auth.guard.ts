import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isLoggedIn().pipe(
    map(isLoggedIn => {
      if (!isLoggedIn) { console.log("redirect after login");
        localStorage.setItem('redirect_after_login','/week2');
        router.navigate(['/login']);
        return false;
      }
      else
        return true;
    })
  );
};
