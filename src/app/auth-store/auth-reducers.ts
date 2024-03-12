import {createReducer, on} from "@ngrx/store";
import * as AuthActions from './auth.actions';

const initState = {}

const _authReducer = createReducer(
    initState,

    on(
        AuthActions.login,
        (state, action) => ({

    }))
)
