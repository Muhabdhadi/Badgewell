import {Injectable} from "@angular/core";
import {LoginResponseInterface} from "./interfaces/login-response.interface";
import * as AuthActions from "./store/auth.actions";

@Injectable({
    providedIn: 'root'
})
export class AuthHelperService {
    handleTokensExpirationDates(loginResponsePayload: LoginResponseInterface) {
        const todayDateMilliSeconds = new Date().getTime();

        const accessTokenExpirationDate = new Date(todayDateMilliSeconds + 900000);

        const refreshTokenExpirationDate = new Date(todayDateMilliSeconds + (86400000 * 7));

        return AuthActions.loginSuccess({
            accessToken: loginResponsePayload.accessToken,
            refreshToken: loginResponsePayload.refreshToken,
            accessTokenExpirationDate: accessTokenExpirationDate,
            refreshTokenExpirationDate: refreshTokenExpirationDate
        })
    }
}
