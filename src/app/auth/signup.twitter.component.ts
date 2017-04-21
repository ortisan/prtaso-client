import {Component} from "@angular/core";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'signup-twitter',
  templateUrl: 'signup.twitter.component.html'
})
export class SignupTwitterComponent {
  constructor(private userService: UserService) {
  }

  doSignup() {
    this.userService.signinTwitter();
  }
}
