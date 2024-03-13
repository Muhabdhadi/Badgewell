import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "./sign-up/sign-up.component";

const routes: Routes = [
    {path: '', redirectTo: 'sign-up', pathMatch: 'full'},
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: SignUpComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
