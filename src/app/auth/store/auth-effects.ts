import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as AuthActions from './auth.actions';
import {catchError, map, mergeMap, of, switchMap, tap} from "rxjs";
import {AuthService} from "../auth.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {authSuccess} from "./auth.actions";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {
    signUp = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.signup),
        switchMap((authPayload) => {
            return this.authService.signUp({username: authPayload.username, password: authPayload.password})
                .pipe(
                    tap(() => this.router.navigate(['/login'])),

                    map((authResponse) => {
                        return AuthActions.authSuccess({message: 'You have Successfully Registered' });
                    }),
                    catchError((authResponse: HttpErrorResponse) => {
                        return of(AuthActions.authFailed({message: authResponse.message}))
                    })
                )
        })
    ))

    constructor(
                private actions$: Actions,
                private router: Router,
                private authService: AuthService) {
    }
}
