import {createReducer, on} from "@ngrx/store";
import * as AuthActions from './auth.actions';
import {AuthStateInterface} from "../interfaces/auth-state.interface";

const authState: AuthStateInterface = {
    message: '',
    isLoggedIn: false,
    statusCode: 0,
    isLoading: false
}

export const _authReducer = createReducer(
    authState,

    on(AuthActions.signUpResponse,
        (state, action) => ({
            ...state,
            message: action.message,
            statusCode: action.statusCode,
            isLoggedIn: action.statusCode === 200
    })),
)
