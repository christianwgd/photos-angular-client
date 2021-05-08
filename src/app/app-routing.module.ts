import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoGetComponent } from './photos/components/photo-get/photo-get.component';
import { PhotoListComponent } from './photos/components/photos-list/photo-list.component';
import {PhotosMetaComponent} from "./photos/components/photos-meta/photos-meta.component";
import {EventGetComponent} from "./event/components/event-get/event-get.component";
import {AuthComponent} from "./auth/components/auth/auth.component";



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'photos/photos', component: PhotoListComponent },
  { path: 'photos/photo/:id', component: PhotoGetComponent },
  { path: 'photos/meta/:id', component: PhotosMetaComponent },
  // { path: 'photos/event/:id', component: EventGetComponent },
  // { path: 'photos/user/:id', component: UserGetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
