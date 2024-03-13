import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as AuthActions from '../store/auth.actions';
import {AppReducer} from "../../app-reducer";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthInterface} from "../interfaces/auth.interface";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    authStoreSub!: Subscription;
    isLoginMode = false;
    authForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    })
    constructor(private store$: Store<AppReducer>,
                private activatedRoute: ActivatedRoute,
                private fb: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.url.subscribe({
            next: (url) => {
                this.isLoginMode = url[0].path === 'login';
            }
        })
    }


    dispatchSignUp() {
        this.store$.dispatch(AuthActions.signup(this.authForm.value as AuthInterface))
    }

    validateAuthForm() {
        Object.values(this.authForm.controls).forEach(control => {
            if (control.invalid) {
                control.markAsTouched();
                control.updateValueAndValidity({ onlySelf: true });
            }
        });
    }

    dispatch() {
        switch (this.isLoginMode) {
            case true:
            break

            case false:
                this.dispatchSignUp();
            break;
        }
    }

    onSubmit() {

        this.validateAuthForm();

        if (this.authForm.invalid) { return; }

        this.dispatch();

    }
}
