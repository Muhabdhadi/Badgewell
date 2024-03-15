import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [HeaderComponent, LoadingSpinnerComponent],
    exports: [HeaderComponent, LoadingSpinnerComponent, CommonModule]
})
export class SharedModule {}
