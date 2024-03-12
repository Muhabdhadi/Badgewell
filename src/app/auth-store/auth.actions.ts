import {createAction, props} from "@ngrx/store";

export const login = createAction('[Auth] Sign up',
    props<{
        userName: string,
        password: string
    }>()
);
