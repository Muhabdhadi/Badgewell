import {NgModule} from "@angular/core";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactsRoutingModule} from "./contacts-routing.module";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    declarations: [ContactListComponent],
    imports: [
        ContactsRoutingModule,
        SharedModule,
        InfiniteScrollModule
    ]
})
export class ContactsModule {}
