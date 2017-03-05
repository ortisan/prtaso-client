import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ApiService} from "./api.service";
import {User} from "../models/user.model";

@Injectable()
export class UserService {

  public token: string;

  constructor(private apiService: ApiService) {
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }

  save(user: User): Observable<User> {
    return this.apiService.post('/user', user);
  }

  signin(user: User): Observable <boolean> {
    console.log("posting...")

    return this.apiService.post('/signin', user).map((token: any) => {
      console.log("success");
      if (token) {
        this.token = token;
        user.token = token;
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      } else {
        return false;
      }
    });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
