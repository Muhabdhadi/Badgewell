import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppReducer} from "../../app-reducer";
import * as ContactsActions from '../store/contacts.actions';
import {ContactsInterface} from "../interfaces/contacts.interface";

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    contactsList: ContactsInterface[] = [];
    page = 0;
    pageSize = 20;
    totalCount = 0;
    isLoading = false;
    constructor(private store: Store<AppReducer>) {}

    ngOnInit() {

        this.store.dispatch(ContactsActions.fetchContacts({page: 1, size: 20 }));

        this.store.select('contacts').subscribe({
            next: (contacts) => {
                this.isLoading = contacts.isLoading;
                this.contactsList = contacts.contacts.data;
                this.page = contacts.contacts.page;
                this.pageSize = contacts.contacts.pageSize;
                this.totalCount = contacts.contacts.totalCount;
            }
        })
    }

    onScroll() {
        if(this.contactsList.length < this.totalCount) {
            this.store.dispatch(ContactsActions.fetchContacts({page: this.page + 1, size: this.pageSize }));
        }
    }
}
