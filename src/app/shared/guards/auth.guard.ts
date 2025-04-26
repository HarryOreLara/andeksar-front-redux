import {  inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const authService = inject(AuthService)
  const router = inject(Router);
  
  if(authService.checkStatusService$()){
    return true;
  }else{
    const url = router.createUrlTree(['/']);
    return url;
  }
};
