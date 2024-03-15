import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UtilitiesService} from "../../shared/services/utilities.service";
import {Observable} from "rxjs";
import {ContactsResponseInterface} from "../interfaces/contacts-response.interface";

@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    constructor(private http: HttpClient, private utilitiesService: UtilitiesService) {}

    getContacts(param: {}): Observable<ContactsResponseInterface> {
        const params = this.utilitiesService.createRequestOption(param)
        return this.http.get<ContactsResponseInterface>('api/contacts', {
            params
        });
    }
}
