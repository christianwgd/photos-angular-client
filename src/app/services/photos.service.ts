import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photos';

@Injectable({
  providedIn: 'root'
})

export class PhotosService {

  private baseUrl = 'http://localhost:8000/photos';

  constructor(private http: HttpClient) { }

  getPhotosList(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/photos/`);
  }

  getPhoto(id): Observable<Photo> {
    return this.http.get<Photo>(`${this.baseUrl}/photos/${id}`);
  }
}
