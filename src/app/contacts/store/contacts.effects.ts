import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as ContactsActions from './contacts.actions';
import {catchError, map, of, switchMap} from "rxjs";
import {ContactsService} from "../services/contacts.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class ContactsEffects {
    fetchContacts = createEffect(() => this.actions$.pipe(
        ofType(ContactsActions.fetchContacts),
        switchMap((action) => {
            return this.contactsService.getContacts({page: action.page, pageSize: action.size})
                .pipe(
                    map((contactsResponse) =>
                        ContactsActions.fetchContactsSuccess({contactsResponse: contactsResponse})
                    ),
                    catchError((err: HttpErrorResponse) =>
                        of(ContactsActions.fetchContactsFailed({message: err.message}))
                    )
                )
        })
    ));

    constructor(private actions$: Actions, private contactsService: ContactsService) {}
}
