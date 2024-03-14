import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import * as fromAuth from "./auth/store/auth-reducers";
import * as fromContacts from './contacts/store/contacts.reducer';
import {AuthEffects} from "./auth/store/auth-effects";
import {SharedModule} from "./shared/shared.module";
import {ContactsEffects} from "./contacts/store/contacts.effects";
import {HttpInterceptors} from "./http-interceptors";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({auth: fromAuth._authReducer, contacts: fromContacts._contactsReducer}),
    EffectsModule.forRoot([AuthEffects, ContactsEffects]),
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptors,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
