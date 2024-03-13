import {ContactsInterface} from "./contacts.interface";

export interface ContactsResponseInterface {
    data: ContactsInterface[],
    totalCount: number,
    page: number,
    pageSize: number
}
