import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../user";
import {config} from "../../config";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(url): Observable<User> {
    return this.http.get<User>(url);
  }

  getUserByUsername(username): Observable<User> {
    const url = config.apiUrl + '/photos/users/username/' + username + '/';
    return this.http.get<User>(url);
  }
}
