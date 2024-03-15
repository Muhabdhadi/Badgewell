import {createReducer, on} from "@ngrx/store";
import * as AuthActions from './auth.actions';
import {AuthStateInterface} from "../interfaces/auth-state.interface";

const authState: AuthStateInterface = {
    authErrorMessage: '',
    authSuccessMessage: '',
    accessToken: '',
    accessTokenExpirationDate: null,
    refreshToken: '',
    refreshTokenExpirationDate: null,
    isLoading: false
}

export const _authReducer = createReducer(
    authState,

    on(AuthActions.loginStart,
       AuthActions.signup,
        (state) => ({
            ...state,
            isLoading: true
        })
    ),


    on(AuthActions.authFailed,
        (state, action) => ({
            ...state,
            authErrorMessage: action.message,
            isLoading: false
        })
    ),

    on(AuthActions.authSuccess,
        (state, action) => ({
            ...state,
            authErrorMessage: '',
            authSuccessMessage: action.message,
            isLoading: false
        })
    ),

    on(AuthActions.loginSuccess,
        (state, action) => (
            {
            ...state,
            accessToken: action.accessToken,
            accessTokenExpirationDate: action.accessTokenExpirationDate,
            refreshToken: action.refreshToken,
            refreshTokenExpirationDate: action.refreshTokenExpirationDate,
            isLoading: false

        })
    ),

    on(AuthActions.logout, (state) => ({
        ...state,
        authErrorMessage: '',
        authSuccessMessage: '',
        accessToken: '',
        accessTokenExpirationDate: null,
        refreshToken: '',
        refreshTokenExpirationDate: null,
        isLoading: false
    }))
)
