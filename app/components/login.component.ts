import {Component} from "@angular/core";
import {Validators, FormBuilder} from "@angular/forms";
import {LoginService} from "../services/login.service";
@Component({
    selector: 'login',
    template: `
        <form [formGroup]="loginForm" (ngSubmit)="doLogin($event)">
         <div class="form-group">
                <label for="username">Username</label>
                <input class="form-control" id="username" formControlName="username" type="text" placeholder="Your username">
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


    constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
    }

    public loginForm = this.formBuilder.group({
        username: ["", Validators.required],
        password: ["", Validators.required]
    });

    doLogin(event) {
        console.log(event);
        console.log(this.loginForm.value)


        this.loginService.postLogin(this.loginForm.value).subscribe(
            user => {
                console.log("teste");
            },
            err => {
                // Log errors if any
                console.log(err);
            });
    }
}