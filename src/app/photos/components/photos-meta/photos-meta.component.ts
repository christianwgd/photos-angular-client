import { Component, OnInit } from '@angular/core';
import {PhotoMeta} from "../../photos";
import {ActivatedRoute} from "@angular/router";
import {PhotosService} from "../../services/photos.service";

@Component({
  selector: 'app-photos-meta',
  templateUrl: './photos-meta.component.html',
  styleUrls: ['./photos-meta.component.css']
})
export class PhotosMetaComponent implements OnInit {

  photoMeta: PhotoMeta;
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
      this.photosService.getPhotoMeta(this.id).subscribe(metadata => {
        this.photoMeta = metadata;
        this.photoMeta.address.formatted = metadata.address.formatted;
      });
    });
  }

}
