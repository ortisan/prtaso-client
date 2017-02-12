import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {

    private loginUrl: string = "http://localhost:8080/prtaso/api/login";

    constructor(private http: Http) {
    }

    postLogin(body: Object): Observable<Comment[]> {
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option

        return this.http.post(this.loginUrl, body, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
}