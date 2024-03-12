import {createAction, props} from "@ngrx/store";

export const signup = createAction('[Auth] Sign up',
    props<{
        userName: string,
        password: string
    }>()
);

export const signUpResponse = createAction('[Auth] Sign up response',
    props<{
        statusCode: number,
        message: string
    }>());
