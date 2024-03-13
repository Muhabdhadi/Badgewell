import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {AuthInterface} from "./interfaces/auth.interface";
import {AuthResponseInterface} from "./interfaces/auth-response.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authBaseUrl = environment.baseUrl + '/auth';
    constructor(private http: HttpClient) {}

    signUp(signUpPayload: AuthInterface): Observable<HttpResponse<AuthResponseInterface>> {
        return this.http.post<AuthResponseInterface>(`/api/auth/signup`, signUpPayload, {
            observe: 'response'
        });
    }

}
