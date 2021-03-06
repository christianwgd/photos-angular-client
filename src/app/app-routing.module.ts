import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoGetComponent } from './components/photo-get/photo-get.component';
import { PhotoListComponent } from './components/photos-list/photo-list.component';



const routes: Routes = [
  {
    path: '',
    component: PhotoListComponent
  },
  {
    path: 'photos/photos',
    component: PhotoListComponent
  },
  {
    path: 'photos/photo/:id',
    component: PhotoGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
