import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'twitter-callback',
  template: 'Redirecting...',
})
export class TwitterCallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  public ngOnInit() {
    console.log("On init twitter callback")

    this.route.params.subscribe(params => {
      let token = +params["token"];
      console.log("token:", token);
    });

    this.router.navigate(['/home']);

  }
}
