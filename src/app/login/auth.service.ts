import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  private auth_url: string = 'http://localhost:8000/accounts/get_auth_token/';

  getAuthToken(username:string, password:string ) {
    return this.http.post<string>(this.auth_url, {username, password})
      // this is just the HTTP call,
      // we still need to handle the reception of the token
      // response body: {"token": "<token>"}
  }
}

