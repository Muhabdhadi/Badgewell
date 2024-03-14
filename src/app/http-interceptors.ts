import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginResponseInterface} from "./auth/interfaces/login-response.interface";

@Injectable()
export class HttpInterceptors implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger;
        const token = JSON.parse(localStorage.getItem('loginTokens') as string) as LoginResponseInterface;
        if (token.accessToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token.accessToken,
                },
            });
        }
        return next.handle(req);
    }
}
