import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppReducer} from "../../app-reducer";
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private store$: Store<AppReducer>) {
  }
  logout() {
    localStorage.clear();
    this.store$.dispatch(AuthActions.logout());
  }
}
