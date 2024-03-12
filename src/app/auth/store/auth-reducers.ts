import {Action, createReducer, on} from "@ngrx/store";
import * as AuthActions from './auth.actions';
import {AuthStateInterface} from "../auth-state.interface";

const initState = {
    message: '',
    isLoggedIn: false,
    statusCode: 0
}

export const _authReducer = createReducer(
    initState,

    on(AuthActions.signUpResponse,
        (state, action) => ({
            ...state,
            message: action.message,
            statusCode: action.statusCode,
            isLoggedIn: action.statusCode === 200
    })),
)
