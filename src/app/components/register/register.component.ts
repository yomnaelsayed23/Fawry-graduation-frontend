import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer/footer.component";


@Component({
  selector: 'app-registr',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgClass,
    NavbarComponent,
    FooterComponent
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  is_loading: boolean = false;
  date: Date | undefined;
  error: string = '';
  constructor(private _Router: Router) {}
  registerform: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    termsCheckbox: new FormControl(Validators.requiredTrue),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(012|010|011|015)\d{8}$/),
    ]), gender: new FormControl(null, [
      Validators.required
    ])
  });

  submitregistration(registerform: FormGroup) {
    // this.is_loading = true;
    // this.AuthService.signupUser(registerform.value).subscribe({
    //   next: (response) => {
    //     this.is_loading = false;
    //     if (response.message === 'success') {
    //       this._Router.navigate(['/login']);
    //     } else {
    //       this.error = response.message;
    //     }
    //   },
    // });
    console.log(registerform.value);
  }
}

// this is register for the user not finished yet
// pipe for the birthday
// confirmpassword validation function
