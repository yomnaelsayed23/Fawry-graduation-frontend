import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer/footer.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    HttpClientModule,
    NgClass,
    NavbarComponent,
    FooterComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent  {
  // backerror: string = '';
  error: string = '';
  isuserLogin: boolean = false;

  constructor(
    private _Router: Router,
    private http: HttpClient,

  ) {}


  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });


  submitlogin() {
    const formdata = new FormData();

    formdata.append('email', this.loginform.get('email')?.value);
    formdata.append('password', this.loginform.get('password')?.value);


  }
}

// this is fixed for the vendor login for now
// need to adjust it after we get the user login and registration apis
