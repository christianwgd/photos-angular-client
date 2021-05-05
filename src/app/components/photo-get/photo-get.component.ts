import { Component, OnInit } from '@angular/core';
import {Photo} from "../../models/photos";
import {PhotosService} from "../../services/photos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photo-get',
  templateUrl: './photo-get.component.html',
  styleUrls: ['./photo-get.component.css']
})
export class PhotoGetComponent implements OnInit {
  currentPhoto: Photo;
  id = null;
  private route: ActivatedRoute;
  private photosService: PhotosService;

  constructor( photosService: PhotosService, route: ActivatedRoute ) {
    this.route = route;
    this.photosService = photosService;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.photosService.getPhoto(this.id).subscribe(photo => {
        this.currentPhoto = photo;
      });
    });
  }

}
