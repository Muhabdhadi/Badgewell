import {Injectable} from "@angular/core";
import {HttpParams} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UtilitiesService {
    createRequestOption = (req?: any): HttpParams => {
        let options: HttpParams = new HttpParams();

        if (req) {
            Object.keys(req).forEach(key => {
                if (req[key] !== '' && req[key] !== null) {
                    options = options.set(key, req[key]);
                }
            });
        }

        return options;
    };
}
