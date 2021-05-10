import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {TokenAuth} from "../../auth";

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  isLoginFailed: boolean = false;
  errorMessage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      if (url[1].path === 'logout') {
        this.logout()
      };
    });
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.authService.getAuthToken(this.f.username.value, this.f.password.value)
    .subscribe(
      authToken => {
        if (authToken.access) {
          const userAuth: TokenAuth = {
            "username": this.f.username.value,
            "access": authToken.access,
            "refresh": authToken.refresh
          }
          sessionStorage.setItem('userAuth', JSON.stringify(userAuth));
          this.router.navigate(['photos/photos']);
        }
      },
      error => {
        console.log(error);
        this.isLoginFailed = true;
        this.errorMessage = 'Login fehlgeschlagen'
      }
    );
  }

  logout() {
    // remove user from session storage to log user out
    sessionStorage.removeItem('userAuth');
    this.router.navigate(['account/login']);
  }

  isLoggedIn() {
    return sessionStorage.getItem('userAuth');
  }
}
