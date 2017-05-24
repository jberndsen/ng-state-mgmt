import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {StorageService} from './storage.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {Router} from '@angular/router';

@Injectable()
export class AuthorizationService {
  private token: string;
  redirectUrl: string;

  constructor(private http: Http,
              private storage: StorageService,
              private router: Router) {
    const user = storage.get('user');
    this.token = user && user['token'];
  }

  login(username: string, password: string): Observable<boolean> {
    const clientId = '099153c2625149bc8ecb3e85e03f0022';
    const credentials = `grant_type=password&username=${username}&password=${password}&client_id=${clientId}`;

    const headers = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });

    return this.http.post('/api/token', credentials, headers)
      .map(result => result.json())
      .map(response => {
        // login considered successful if there's a jwt token in the response
        const token = response && response.access_token;
        if (token) {
          this.token = token;
          this.storage.set('user', {username: username, token: token});
          return true;
        } else {
          return false;
        }
      })
      .catch(this.handleError);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    this.storage.clear('user');
    this.router.navigate(['login']);
  }

  isLoggedIn() {
    return this.token !== null;
  }

  getToken() {
    return this.token;
  }

  getUserEmail() {
    if (!this.token) {
      throw new Error('Cannot get user e-mail when not logged in.');
    }

    const payload = this.decodeToken(this.token);
    return payload['email'];
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  private decodeToken(token: string) {
    const parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error('JWT must have 3 parts.');
    }

    const decoded = window.atob(parts[1]);
    if (!decoded) {
      throw new Error('Cannot decode the token.');
    }

    return JSON.parse(decoded);
  }

  private getTokenExpirationDate(token: string): Date {
    let decoded: any;
    decoded = this.decodeToken(token);

    if (!decoded.hasOwnProperty('exp')) {
      return null;
    }

    const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);

    return date;
  }
}
