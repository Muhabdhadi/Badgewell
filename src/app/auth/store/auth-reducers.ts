import {createReducer, on} from "@ngrx/store";
import * as AuthActions from './auth.actions';
import {AuthStateInterface} from "../interfaces/auth-state.interface";

const authState: AuthStateInterface = {
    authErrorMessage: '',
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
        (state, actions) => ({
            ...state
        })
    )
)
