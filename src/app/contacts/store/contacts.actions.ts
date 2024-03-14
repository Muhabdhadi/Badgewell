import {createAction, props} from "@ngrx/store";
import {ContactsResponseInterface} from "../interfaces/contacts-response.interface";

export const fetchContacts = createAction('[Contacts] Fetch Contacts',
    props<{
        page: number,
        size: number
    }>()
);

export const fetchContactsSuccess = createAction('[Contacts] Fetch Contacts Success',
    props<{
    contactsResponse: ContactsResponseInterface
    }>()
);

export const fetchContactsFailed = createAction('[Contacts] fetch Contacts Failed',
    props<{
        message: string
    }>()
);
