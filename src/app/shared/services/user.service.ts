import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ApiService} from "./api.service";
import {User} from "../models/user.model";

@Injectable()
export class UserService {

  public token: string;

  constructor(private apiService: ApiService) {
  }

  save(user: User): Observable<User> {
    return this.apiService.post('/user', user);
  }

  login(user: User): Observable <boolean> {
    return this.apiService.post('/login', user).map((token: any) => {
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
