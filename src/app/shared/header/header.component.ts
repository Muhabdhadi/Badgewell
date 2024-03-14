import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppReducer} from "../../app-reducer";
import * as AuthActions from '../../auth/store/auth.actions';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private store$: Store<AppReducer>, private router: Router) {
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.store$.dispatch(AuthActions.logout());
  }
}
