import {Component} from "@angular/core";
import {Validators, FormBuilder} from "@angular/forms";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/user.model";
import {Router} from "@angular/router";
import {StorageService} from "../shared/services/storage.service";

@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html'
})
export class SignupComponent {

  hasErrors: boolean;

  constructor(private userService: UserService, private storageService: StorageService, private router: Router, private formBuilder: FormBuilder) {
  }

  public registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  signup(event: any) {
    this.userService.save(this.registerForm.value).subscribe((user: User) => {
      this.storageService.saveCurrentUser(user);
      this.router.navigate(['/home']);
      this.hasErrors = false;
    }, (error) => this.hasErrors = true);
  }
}
