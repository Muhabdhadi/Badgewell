import {createAction, props} from "@ngrx/store";

export const fetchContacts = createAction('[Contacts] Fetch Contacts',
    props<{
        page: number,
        size: number
    }>()
);

export const fetchContactsSuccess = createAction('[Contacts] Fetch Contacts Success');

export const fetchContactsFailed = createAction('[Contacts] fetch Contacts Failed',
    props<{
        message: string
    }>()
);
