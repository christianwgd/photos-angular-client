import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from './photos';

@Injectable({
  providedIn: 'root'
})

export class PhotosService {

  baseUrl = 'http://localhost:8000/photos';

  constructor(private http: HttpClient) { }

  getPhotosList(): Observable<Photo[]> {
    const url = this.baseUrl + '/photos/';
    return this.http.get<Photo[]>(url);
  }

  getPhoto(id) {
    console.log('getPhoto');
    console.log(id);
    const url = this.baseUrl + '/photo/';
    return  this.http.get(`${url}${id}`);
  }
}
