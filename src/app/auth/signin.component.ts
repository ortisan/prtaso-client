import {Component} from "@angular/core";
import {Validators, FormBuilder} from "@angular/forms";
import {UserService} from "../general/services";
@Component({
  selector: 'signin',
  templateUrl: 'signin.component.html'
})
export class SigninComponent {

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  public signinForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  doSignin(event) {
    this.userService.signin(this.signinForm.value);
  }
}
