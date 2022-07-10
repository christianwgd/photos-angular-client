import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {config} from "../config";
import {Observable} from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // exclude login url from interceptor
    if (httpRequest.url === config.apiUrl+'/api/token/') {
      return next.handle(httpRequest);
    }
    // get token from session storage
    const userAuth = JSON.parse(sessionStorage.getItem('userAuth'));
    const request = httpRequest.clone({
      setHeaders: {
        Authorization: 'Bearer '+userAuth.access
      }
    });
    return next.handle(request);
  }
}
