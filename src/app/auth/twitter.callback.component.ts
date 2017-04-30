import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {UserService} from "../shared/services/user.service";
import {StorageService} from "../shared/services/storage.service";

@Component({
  selector: 'twitter-callback',
  template: 'Redirecting...',
})
export class TwitterCallbackComponent implements OnInit {

  constructor(private userService: UserService, private storageService: StorageService, private route: ActivatedRoute, private router: Router) {
  }

  public ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const token = params["token"];
      this.userService.signinWithToken(token).subscribe((result: boolean) => {
        this.router.navigate(['/home']);
      });
    });
  }
}
