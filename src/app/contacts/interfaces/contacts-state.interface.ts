import {ContactsResponseInterface} from "./contacts-response.interface";

export interface ContactsStateInterface {
    isLoading: boolean,
    contacts: ContactsResponseInterface
}
