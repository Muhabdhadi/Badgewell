import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthHelperService} from "../../auth/services/auth-helper.service";

export const authGuard: CanActivateFn = () => {
    const authHelperService = inject(AuthHelperService);
    const router = inject(Router);

    const tokens = authHelperService.getToken();

    if (tokens?.accessToken) {
        return true;
    } else {
        router.navigate(['login'])
        return false;
    }

};
