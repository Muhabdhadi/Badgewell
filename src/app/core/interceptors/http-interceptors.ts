import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, concatMap, Observable, tap, throwError} from "rxjs";
import {AuthService} from "../../auth/services/auth.service";
import {AuthHelperService} from "../../auth/services/auth-helper.service";
import {Router} from "@angular/router";

@Injectable()
export class HttpInterceptors implements HttpInterceptor {

    constructor(private authService: AuthService,
                private authHelperService: AuthHelperService,
                private router: Router) {
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const token = this.authHelperService.getToken();
        if (token?.accessToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token.accessToken,
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
        return this.authService.refreshToken(this.authHelperService.getToken().refreshToken)
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
