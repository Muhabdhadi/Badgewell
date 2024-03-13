import {NgModule} from "@angular/core";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [SignUpComponent],
    imports: [
        AuthRoutingModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: []
})
export class AuthModule {}
