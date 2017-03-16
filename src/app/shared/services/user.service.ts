import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ApiService} from "./api.service";
import {User} from "../models/user.model";
import {StorageService} from "./storage.service";
import {SignResult} from "../models/sign.result.model";

@Injectable()
export class UserService {

  constructor(private apiService: ApiService, private storageService: StorageService) {
  }

  getCurrentUser(): User {
    return this.storageService.getCurrentUser();
  }

  isAuthenticated(): boolean {
    return this.storageService.getCurrentUser() != null;
  }

  save(user: User): Observable<any> {
    return this.apiService.post('/user', user);
  }

  signin(user: User): Observable <boolean> {
    return this.apiService.post('/signin', user).map((signResult: SignResult) => {
      console.log("Result:" + signResult);

      user.token = signResult.token;
      this.storageService.saveCurrentUser(user);
      return true;
    });
  }

  logout(): void {
    this.storageService.deleteCurrentUser();
  }
}
