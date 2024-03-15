import {NgModule} from "@angular/core";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [SignUpComponent],
    imports: [
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    exports: []
})
export class AuthModule {}
