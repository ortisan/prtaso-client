import {Component} from "@angular/core";
import {Validators, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {User} from "../models/models";
@Component({
    selector: 'register',
    template: `
        <div class="container">
            <form [formGroup]="registerForm" (ngSubmit)="doRegister($event)">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input class="form-control" id="name" formControlName="name" type="text" placeholder="Your name">
                </div>
                
                <div class="form-group">
                    <label for="username">Username</label>
                    <input class="form-control" id="username" formControlName="username" type="text" placeholder="Your username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input class="form-control" id="password" formControlName="password" type="password" placeholder="Your password">
                 </div>   
                 
                <button type="submit" class="btn btn-default">Register</button>
            </form>
        </div>
    `
})
export class RegisterComponent {

    constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
    }

    public registerForm = this.formBuilder.group({
        name: ["", Validators.required],
        username: ["", Validators.required],
        password: ["", Validators.required],
    });

    doRegister(event) {
        this.userService.postRegister(this.registerForm.value).subscribe(
            (user: User) => {
                console.log("sucesso");
                this.router.navigateByUrl("/home");
            },
            err => {
                console.log(err);
            });
    }
}