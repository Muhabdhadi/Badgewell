import {NgModule} from "@angular/core";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
    declarations: [SignUpComponent],
    imports: [AuthRoutingModule],
    exports: []
})
export class AuthModule {}
