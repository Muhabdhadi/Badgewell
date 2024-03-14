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

export const loginStart = createAction('[Auth] Login Start',
    props<{
        username: string,
        password: string
    }>()
);

export const loginSuccess = createAction('[Auth] Login Success',
    props<{
        accessToken: string,
        accessTokenExpirationDate: Date,
        refreshToken: string,
        refreshTokenExpirationDate: Date
    }>()
);

export const logout = createAction('[Auth] Logout');
