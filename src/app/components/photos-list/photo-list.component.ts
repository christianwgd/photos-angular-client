import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Photo } from '../../services/photos';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos = new Array<Photo>();
  displayedColumns: string[] = ['id', 'name', 'url'];

  constructor( photosService: PhotosService ) {
    photosService.getPhotosList().subscribe(response => {
      this.photos = response.map(item => {
        return new Photo(
          item.id,
          item.name,
          item.url
        );
      });
    });
  }

  ngOnInit() {
  }

}
