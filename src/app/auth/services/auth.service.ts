import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from "../../config";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth_url = config.apiUrl+'/accounts/get_auth_token/';

  constructor(private http: HttpClient) {  }

  getAuthToken(username:string, password:string ): Observable<string> {
    return this.http.post<string>(this.auth_url, {username, password})
      // this is just the HTTP call,
      // we still need to handle the reception of the token
      // response body: {"token": "<token>"}
  }
}

