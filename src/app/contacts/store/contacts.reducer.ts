import {createReducer, on} from "@ngrx/store";
import {ContactsStateInterface} from "../interfaces/contacts-state.interface";
import * as ContactsActions from './contacts.actions';

const contactsState: ContactsStateInterface = {
    isLoading: false,
    contacts: {
        data: [],
        pageSize: 20,
        page: 0,
        totalCount: 0
    }
}
export const _contactsReducer = createReducer(
    contactsState,

    on(ContactsActions.fetchContacts,
        (state) => ({
        ...state,
            isLoading: true
    })
    ),

    on(ContactsActions.fetchContactsSuccess,
        (state, action) => ({
            ...state,
            isLoading: false,
            contacts: {
                data: [...state.contacts.data, ...action.contactsResponse.data],
                pageSize: action.contactsResponse.pageSize,
                page: action.contactsResponse.page,
                totalCount: action.contactsResponse.totalCount
            }
        })),

    on(ContactsActions.fetchContactsFailed,
        (state) => ({
            ...state,
            isLoading: false
        })
    ),
)


