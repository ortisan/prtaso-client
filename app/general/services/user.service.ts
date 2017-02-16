import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {User} from "../models";

@Injectable()
export class UserService {

  private registerUrl: string = "http://localhost:8080/prtaso/api/user";
  private loginUrl: string = "http://localhost:8080/prtaso/api/login";

  constructor(private http: Http) {
  }

  postRegister(body: User): Observable<User> {
    return this.http.post(this.registerUrl, body).map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  postSignin(body: User): Observable <string> {
    return this.http.post(this.loginUrl, body).map((res: Response) => res.text()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
