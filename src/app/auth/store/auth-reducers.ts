import {createReducer, on} from "@ngrx/store";
import * as AuthActions from './auth.actions';
import {AuthStateInterface} from "../interfaces/auth-state.interface";

const authState: AuthStateInterface = {
    authErrorMessage: '',
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
        (state) => ({
            ...state
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
