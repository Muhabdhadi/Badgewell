import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthHelperService} from "../auth/services/auth-helper.service";

export const loggedInGuard: CanActivateFn = () => {
  const authHelperService = inject(AuthHelperService);
  const router = inject(Router);

  const tokens = authHelperService.getToken();

  if (tokens?.accessToken) {
    router.navigate(['contacts'])
    return false;
  } else {
    return true;
  }
};
