import {createAction, props} from "@ngrx/store";

export const signup = createAction('[Auth] Sign up',
    props<{
        username: string,
        password: string
    }>()
);

export const authFailed = createAction('[Auth] Auth Failed',
    props<{
        message: string
    }>()
);

export const authSuccess = createAction('[Auth] Auth Success',
    props<{
        message: string
    }>()
);
