import {Component} from "@angular/core";
import {Validators, FormBuilder} from "@angular/forms";
import {UserService} from "../shared/services/user.service";
import {Router} from "@angular/router";
@Component({
  selector: 'signin',
  templateUrl: 'signin.component.html'
})
export class SigninComponent {

  hasErrors: boolean;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
  }

  public signinForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  signin(event: any) {
    this.hasErrors = false;
    this.userService.signin(this.signinForm.value).subscribe((isSucess: boolean) => {
      this.router.navigate(["/home"]);
      this.hasErrors = false
    }, (error) => this.hasErrors = true);
  }
}
