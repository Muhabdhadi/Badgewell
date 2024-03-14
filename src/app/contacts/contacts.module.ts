import {NgModule} from "@angular/core";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactsRoutingModule} from "./contacts-routing.module";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [ContactListComponent],
    imports: [ContactsRoutingModule, CommonModule]
})
export class ContactsModule {}
