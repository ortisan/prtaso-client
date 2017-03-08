import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {StorageService} from './storage.service';

@Injectable()
export class ApiService {
  constructor(private http: Http,
              private storageService: StorageService) {
  }

  private setHeaders(): Headers {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    let token = this.storageService.getToken();

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }

    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json() || "Server error");
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, {headers: this.setHeaders(), search: params})
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders()}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body), {headers: this.setHeaders()}
    )
      .map((res: Response) => res.json())
      .catch(this.formatErrors);

  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      {headers: this.setHeaders()}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }
}
