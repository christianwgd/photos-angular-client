import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from "../../config";
import {Observable} from "rxjs";
import {TokenAuth} from "../auth";

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth_url = config.apiUrl+'/api/token/';

  constructor(private http: HttpClient) {  }

  getAuthToken(username:string, password:string ): Observable<TokenAuth> {
    return this.http.post<TokenAuth>(this.auth_url, {username, password})
  }
}

