import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoGetComponent } from './components/photo-get/photo-get.component';
import { PhotoListComponent } from './components/photos-list/photo-list.component';
import {PhotoMeta} from "./models/photos";
import {PhotosMetaComponent} from "./components/photos-meta/photos-meta.component";



const routes: Routes = [
  { path: '', redirectTo: 'photos/photos', pathMatch: 'full' },
  { path: 'photos/photos', component: PhotoListComponent },
  { path: 'photos/photo/:id', component: PhotoGetComponent },
  { path: 'photos/meta/:id', component: PhotosMetaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
