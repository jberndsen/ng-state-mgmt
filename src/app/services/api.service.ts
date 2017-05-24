import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/Observable';
import {AuthorizationService} from './auth.service';

@Injectable()
export class ApiService {
  constructor(private http: Http, private auth: AuthorizationService) {
  }

  get(resource: string) {
    return this.http.get(`/api/${resource}`, this.getRequestOptions())
      .map(result => result.json())
      .catch(e => e.status === 401 ? Observable.throw('Unauthorized') : e.json());
  }

  post(resource: string, body: any) {
    return this.http.post(`/api/${resource}`, body, this.getRequestOptions())
      .map(result => result.json())
      .catch(e => e.status === 401 ? Observable.throw('Unauthorized') : e.json());
  }

  private getRequestOptions() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.auth.isLoggedIn() ? `Bearer ${this.auth.getToken()}` : undefined
    });

    return new RequestOptions({headers: headers});
  }
}
