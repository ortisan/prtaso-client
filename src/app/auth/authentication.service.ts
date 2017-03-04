import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ApiService} from "../shared/services/api.service";
export class AuthenticationService {

  public token: string;

  constructor(private apiService: ApiService, private http: Http) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post('api/authenticate', JSON.stringify({
      username: username,
      password: password
    })).map((response: Response) => {
      let token = response.json() && response.json().token;
      if (token) {
        this.token = token;
        localStorage.setItem('currentUser', JSON.stringify({
          username: username,
          password: password,
          token: this.token
        }));
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
