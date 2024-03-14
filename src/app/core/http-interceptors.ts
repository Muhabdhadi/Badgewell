import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, concatMap, Observable, tap, throwError} from "rxjs";
import {LoginResponseInterface} from "../auth/interfaces/login-response.interface";
import {AuthService} from "../auth/auth.service";
import {AuthHelperService} from "../auth/auth-helper.service";
import {Router} from "@angular/router";

@Injectable()
export class HttpInterceptors implements HttpInterceptor {

    constructor(private authService: AuthService,
                private authHelperService: AuthHelperService,
                private router: Router) {
    }

    token = JSON.parse(localStorage.getItem('loginTokens') as string) as LoginResponseInterface;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.token?.accessToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.token.accessToken,
                },
            });
        }
        return next.handle(req).pipe(
            catchError((err) => {
                if (err.status === 401 || err.status === 403) {
                    return this.refreshToken(req, next);
                }
                return throwError(() => 'UNAUTHORIZED');
            })
        );
    }

    private refreshToken(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return this.authService.refreshToken(this.token.refreshToken)
            .pipe(
                tap((loginPayload) => {
                    this.authHelperService.saveTokens(loginPayload);
                    this.authHelperService.handleTokensExpirationDates(loginPayload)
                }),
                concatMap((token) => {
                    req = req.clone({
                        setHeaders: {
                            Authorization: 'Bearer ' + token.accessToken,
                        },
                    })
                    return next.handle(req);
                }),
                catchError(() => {
                    this.router.navigate(['/login']);
                    return throwError(() => 'UNAUTHORIZED')
                })
            );
    }
}
