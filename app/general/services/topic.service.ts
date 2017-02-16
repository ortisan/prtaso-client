/**
 * Created by marcelo on 30/01/17.
 */
import {Injectable} from "@angular/core";
import {Topic} from "../models";
import {Observable} from "rxjs/Rx";
import {Http, Response, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class TopicService {

  private saveUrl: string = "http://localhost:8080/prtaso/api/topic";

  constructor(private http: Http) {
  }

  postSave(body: Topic): Observable <Topic> {

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.saveUrl, body, options).map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}


