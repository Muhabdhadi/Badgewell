import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "./core/auth.guard";
import {loggedInGuard} from "./core/logged-in.guard";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        canActivate: [loggedInGuard]
    },

    {
        path: 'contacts',
        loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
        canActivate: [authGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
