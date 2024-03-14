import {createReducer, on} from "@ngrx/store";
import {ContactsStateInterface} from "../interfaces/contacts-state.interface";
import * as ContactsActions from './contacts.actions';

const contactsState: ContactsStateInterface = {
    contacts: {
        data: [],
        pageSize: 20,
        page: 0,
        totalCount: 0
    }
}
export const _contactsReducer = createReducer(
    contactsState,

    on(ContactsActions.fetchContactsSuccess,
        (state, action) => ({
            ...state,
            contacts: {
                data: [...state.contacts.data, ...action.contactsResponse.data],
                pageSize: action.contactsResponse.pageSize,
                page: action.contactsResponse.page,
                totalCount: action.contactsResponse.totalCount
            }
        }))
)


