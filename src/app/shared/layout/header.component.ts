import {Component, OnInit} from "@angular/core";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'layout-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }

  logout() {
    this.userService.logout();
  }

}
