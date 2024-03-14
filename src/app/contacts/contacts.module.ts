import {NgModule} from "@angular/core";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactsRoutingModule} from "./contacts-routing.module";
import {CommonModule} from "@angular/common";
import {InfiniteScrollModule} from "ngx-infinite-scroll";


@NgModule({
    declarations: [ContactListComponent],
    imports: [
        ContactsRoutingModule,
        CommonModule,
        InfiniteScrollModule
    ]
})
export class ContactsModule {}
