import {NgModule} from "@angular/core";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [SignUpComponent],
    imports: [
        AuthRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: []
})
export class AuthModule {}
