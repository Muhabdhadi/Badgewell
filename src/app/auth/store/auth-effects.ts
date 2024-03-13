import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as AuthActions from './auth.actions';
import {catchError, EMPTY, map, mergeMap, of} from "rxjs";
import {AuthService} from "../auth.service";
import {HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthEffects {
    signUp = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.signup),
        mergeMap((authPayload) => {
            return this.authService.signUp({username: authPayload.username, password: authPayload.password})
                .pipe(
                    map((authResponse) => {
                        return AuthActions.signUpResponse({statusCode: authResponse.status, message: 'Success' });
                    }),
                    catchError((authResponse: HttpResponse<any>) => {
                        return of(AuthActions.signUpResponse({statusCode: authResponse.status, message: 'Error'}))
                    })
                )
        })
    ))

    constructor(
                private actions$: Actions,
                private authService: AuthService) {
    }
}
