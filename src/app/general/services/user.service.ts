import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {User} from "../models";
import {ApiService} from "./api.service";

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
