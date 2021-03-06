import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { PhotosService } from './photos/services/photos.service';
import { PhotoListComponent } from './photos/components/photos-list/photo-list.component';
import { PhotoGetComponent } from './photos/components/photo-get/photo-get.component';

import { MaterialModule } from './material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotosMetaComponent } from './photos/components/photos-meta/photos-meta.component';
import {MatCardModule} from "@angular/material/card";
import {EventGetComponent} from "./event/components/event-get/event-get.component";

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {UserGetComponent} from "./user/components/user-get/user-get.component";
import {TagGetComponent} from "./tag/components/tag-get/tag-get.component";
import {AuthComponent} from "./auth/components/auth/auth.component";
import {TokenInterceptor} from "./auth/token.interceptor";
import {AuthService} from "./auth/services/auth.service";
import {UserContextComponent} from "./user/components/user-context/user-context.component";

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    PhotoGetComponent,
    PhotoListComponent,
    PhotosMetaComponent,
    EventGetComponent,
    UserGetComponent,
    UserContextComponent,
    TagGetComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [
    AuthService,
    PhotosService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
