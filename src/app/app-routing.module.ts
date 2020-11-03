import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoGetComponent } from './components/photo-get/photo-get.component';
import { PhotoListComponent } from './components/photos-list/photo-list.component';



const routes: Routes = [
  {
    path: 'photos/photos/:id',
    component: PhotoGetComponent
  },
  {
    path: 'photos/photos',
    component: PhotoListComponent
  },
  {
    path: '',
    component: PhotoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
