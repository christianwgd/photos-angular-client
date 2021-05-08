import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Photo, PhotoMeta} from '../photos';
import {config} from "../../config";

@Injectable({
  providedIn: 'root'
})

export class PhotosService {

  private baseUrl = config.apiUrl+'/photos';

  constructor(private http: HttpClient) { }

  getPhotosList(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/photos/`);
  }

  getPhoto(id): Observable<Photo> {
    return this.http.get<Photo>(`${this.baseUrl}/photos/${id}`);
  }

  getPhotoMeta(id): Observable<PhotoMeta> {
    return this.http.get<PhotoMeta>(`${this.baseUrl}/photos/${id}`);
  }

}
