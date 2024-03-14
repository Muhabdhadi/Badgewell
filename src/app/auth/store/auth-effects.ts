import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as AuthActions from './auth.actions';
import {catchError, map, of, switchMap, tap} from "rxjs";
import {AuthService} from "../auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AuthHelperService} from "../auth-helper.service";

@Injectable()
export class AuthEffects {
    signUp = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.signup),
        switchMap((authPayload) => {
            return this.authService.signUp({username: authPayload.username, password: authPayload.password})
                .pipe(
                    tap(() => this.router.navigate(['/login'])),

                    map(() => {
                        return AuthActions.authSuccess({message: 'You have Successfully Registered' });
                    }),
                    catchError((authResponse: HttpErrorResponse) => {
                        return of(AuthActions.authFailed({message: authResponse.message}))
                    })
                )
        })
    ));

    login = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.loginStart),
        switchMap((loginPayload) => {
            return this.authService.login(loginPayload)
                .pipe(

                    tap((loginResponse) => {
                        this.router.navigate(['/contacts']);
                        this.authHelperService.saveTokens(loginResponse);
                    }),

                    map((loginResponse) => {
                        return this.authHelperService.handleTokensExpirationDates(loginResponse);
                    }),

                    catchError((authError: HttpErrorResponse) => {
                        return of(AuthActions.authFailed({message: authError.message}))
                    })
                )
        })
    ))


    constructor(
                private actions$: Actions,
                private router: Router,
                private authHelperService: AuthHelperService,
                private authService: AuthService) {
    }
}
