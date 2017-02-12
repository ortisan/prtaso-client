import {Component} from "@angular/core";
import {Validators, FormBuilder} from "@angular/forms";
@Component({
    selector: 'login',
    template: `
        <form [formGroup]="loginForm" (ngSubmit)="doLogin($event)">
         <div class="form-group">
                <label for="email">Email address</label>
                <input class="form-control" id="email" formControlName="email" type="email" placeholder="Your email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input class="form-control" id="password" formControlName="password" type="password" placeholder="Your password">
             </div>   
            <button type="submit" class="btn btn-default">Log in</button>
        </form>
    `
})
export class LoginComponent {

    public loginForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    });

    constructor(public fb: FormBuilder) {
    }

    doLogin(event) {
        console.log(event);
        console.log(this.loginForm.value)
    }
}