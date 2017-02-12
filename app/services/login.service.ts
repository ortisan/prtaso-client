import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {User} from "../models/models";

@Injectable()
export class LoginService {

    private loginUrl: string = "http://localhost:8080/prtaso/api/login";

    constructor(private http: Http) {
    }

    postLogin(body: User): Observable<User> {
        console.log(this.http);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.loginUrl, body, options).map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}