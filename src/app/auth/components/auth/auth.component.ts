import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  isLoginFailed: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    console.log('onInit');
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  get f() {
    console.log('get');
    return this.loginForm.controls;
  }
r
  login() {
    console.log('login');
    this.authService.getAuthToken(this.f.username.value, this.f.password.value)
    .subscribe(
      token => {
        console.log('token', token);
        if (token) {
          this.router.navigate(['photos/photos']);
        }
      },
    error => {
      console.log(error);
      console.log('login failed');
      this.isLoginFailed = true;
      this.errorMessage = 'Login fehlgeschlagen'
    });
  }
}
