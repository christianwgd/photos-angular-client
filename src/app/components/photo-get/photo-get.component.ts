import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Photo} from "../../services/photos";
import {PhotosService} from "../../services/photos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photo-get',
  templateUrl: './photo-get.component.html',
  styleUrls: ['./photo-get.component.css']
})
export class PhotoGetComponent implements OnInit {
  currentPhoto = null;
  id = null;
  private route: ActivatedRoute;


  constructor( photosService: PhotosService, route: ActivatedRoute ) {
    photosService.getPhoto(this.id).subscribe(photo => {
        this.currentPhoto = photo;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('ngOnInit');
      console.log(this.id)
    });
  }

}
