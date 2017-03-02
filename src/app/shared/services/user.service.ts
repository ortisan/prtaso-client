import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ApiService} from "./api.service";
import {User} from "../models/user.model";

@Injectable()
export class UserService {

  constructor(private apiService: ApiService) {
  }

  save(user: User): Observable<User> {
    return this.apiService.post('/user', user);
  }

  signin(user: User): Observable <string> {
    return this.apiService.post('/signin', user);
  }
}
