import {Component} from "@angular/core";
import {Validators, FormBuilder} from "@angular/forms";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  hasErrors: boolean;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
  }

  public registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  register(event: any) {
    this.userService.save(this.registerForm.value).subscribe((user: User) => {
      this.userService.save(user);
      this.router.navigate(['/home']);
      this.hasErrors = false;
    }, (error) => this.hasErrors = true);
  }
}
