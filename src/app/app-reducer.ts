import {AuthStateInterface} from "./auth/interfaces/auth-state.interface";
import {ContactsStateInterface} from "./contacts/interfaces/contacts-state.interface";

export interface AppReducer {
    auth: AuthStateInterface,
    contacts: ContactsStateInterface
}
