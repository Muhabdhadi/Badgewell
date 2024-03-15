import {NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptors} from "./interceptors/http-interceptors";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserModule
    ],
    exports: [AppRoutingModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptors,
            multi: true,
        }
    ]
})
export class CoreModule {}
