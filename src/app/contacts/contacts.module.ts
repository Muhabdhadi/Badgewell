import {NgModule} from "@angular/core";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactsRoutingModule} from "./contacts-routing.module";


@NgModule({
    declarations: [ContactListComponent],
    imports: [ContactsRoutingModule]
})
export class ContactsModule {}
