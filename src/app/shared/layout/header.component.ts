import {Component, OnInit} from "@angular/core";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {userInfo} from "os";

@Component({
  selector: 'layout-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  getCurrentUser() {
    return this.userService.getCurrentUser();
  }

  isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }

  logout() {
    this.userService.logout();
  }

}
