import {Component} from "@angular/core";
import {Validators, FormBuilder} from "@angular/forms";
import {UserService} from "../general/services/user.service";
import {Router} from "@angular/router";
@Component({
    selector: 'signin',
    template: `
        <form [formGroup]="signinForm" (ngSubmit)="doSignin($event)">
         <div class="form-group">
                <label for="username">Username</label>
                <input class="form-control" id="username" formControlName="username" type="text" placeholder="Your username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input class="form-control" id="password" formControlName="password" type="password" placeholder="Your password">
             </div>   
            <button type="submit" class="btn btn-default">Sign in</button>
        </form>
    `
})
export class SigninComponent {

    constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
    }

    public signinForm = this.formBuilder.group({
        username: ["", Validators.required],
        password: ["", Validators.required]
    });

    doSignin(event) {
        this.userService.postSignin(this.signinForm.value).subscribe(
            (token: string) => {
                localStorage.setItem("token", token);
                this.router.navigateByUrl("/home");
            },
            err => {
                console.log(err);
            });
    }
}
