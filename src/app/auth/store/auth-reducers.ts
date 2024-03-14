import {createReducer, on} from "@ngrx/store";
import * as AuthActions from './auth.actions';
import {AuthStateInterface} from "../interfaces/auth-state.interface";

const authState: AuthStateInterface = {
    authErrorMessage: '',
    authSuccessMessage: '',
    accessToken: '',
    accessTokenExpirationDate: null,
    refreshToken: '',
    refreshTokenExpirationDate: null
}

export const _authReducer = createReducer(
    authState,

    on(AuthActions.authFailed,
        (state, action) => ({
            ...state,
            authErrorMessage: action.message
        })
    ),

    on(AuthActions.authSuccess,
        (state, action) => ({
            ...state,
            authErrorMessage: '',
            authSuccessMessage: action.message
        })
    ),

    on(AuthActions.loginSuccess,
        (state, action) => (
            {
            ...state,
            accessToken: action.accessToken,
            accessTokenExpirationDate: action.accessTokenExpirationDate,
            refreshToken: action.refreshToken,
            refreshTokenExpirationDate: action.refreshTokenExpirationDate
        })
    )
)
