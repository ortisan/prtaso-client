import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ApiService} from "./api.service";
import {User} from "../models/user.model";
import {StorageService} from "./storage.service";
import {SignResult} from "../models/sign.result.model";
import {environment} from '../../environments/environment';


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
    return this.apiService.post('/users', user);
  }

  signin(user: User): Observable<boolean> {
    return this.apiService.post('/signin', user).map((signResult: SignResult) => {
      console.log("Result:" + signResult);
      user.id = signResult.userId;
      user.token = signResult.token;
      this.storageService.saveCurrentUser(user);
      return true;
    });
  }

  signinWithToken(token: string): Observable<boolean> {
    return this.apiService.get(`/signin/${token}`).map((signResult: SignResult) => {
      const user = new User();
      user.id = signResult.userId;
      user.name = signResult.name
      user.username = signResult.username;
      user.token = signResult.token;
      this.storageService.saveCurrentUser(user);
      return true;
    });
  }

  signinTwitter() {
    // TODO Maybe need create service to control the window
    window.location.href = `${environment.api_url}/twitter/signin`;
  }

  getUserInfoByToken(token: string): Observable<User> {
    return this.apiService.post('/users', {token: token});
  }

  logout(): void {
    this.storageService.deleteCurrentUser();
  }
}
