import {Component} from "@angular/core";
import {Validators, FormBuilder} from "@angular/forms";
import {UserService} from "../general/services";
@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterComponent {

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  public registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  doRegister(event) {
    this.userService.save(this.registerForm.value)
  }
}
