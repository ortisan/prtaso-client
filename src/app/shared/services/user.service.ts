import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ApiService} from "./api.service";
import {User} from "../models/user.model";
import {StorageService} from "./storage.service";

@Injectable()
export class UserService {

  constructor(private apiService: ApiService, private storageService: StorageService) {
  }

  isAuthenticated(): boolean {
    return this.storageService.getCurrentUser() != null;
  }

  save(user: User): Observable<User> {
    return this.apiService.post('/user', user);
  }

  signin(user: User): Observable <boolean> {
    return this.apiService.post('/signin', user).map((token: any) => {
      if (token) {
        user.token = token;
        this.storageService.saveCurrentUser(user);
        return true;
      } else {
        return false;
      }
    });
  }

  logout(): void {
    this.storageService.deleteCurrentUser();
  }
}
