import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppReducer} from "../../app-reducer";
import * as ContactsActions from '../store/contacts.actions';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    constructor(private store: Store<AppReducer>) {}

    ngOnInit() {

        this.store.dispatch(ContactsActions.fetchContacts({page: 0, size: 20 }));

        this.store.select('contacts').subscribe({
            next: (contacts) => {
                console.log(contacts);
            }
        })
    }
}
