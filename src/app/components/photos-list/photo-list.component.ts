import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Photo } from '../../models/photos';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos = new Array<Photo>();
  displayedColumns: string[] = ['id', 'name', 'imagefile'];

  constructor( private photosService: PhotosService ) {  }

  ngOnInit() {
    this.photosService.getPhotosList().subscribe(response => {
      this.photos = response
    });
  }

}
