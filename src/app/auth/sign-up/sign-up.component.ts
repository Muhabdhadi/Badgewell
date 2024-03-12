import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as AuthActions from '../store/auth.actions';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    constructor(private store$: Store<any>) {
    }

    ngOnInit() {
        this.store$.select('auth').subscribe({
            next: (auth) => {
                console.log(auth);
            }
        })
    }


    onSignUp() {
        this.store$.dispatch(AuthActions.signup({userName: 'mohamed', password: '123456789'}))
    }
}
