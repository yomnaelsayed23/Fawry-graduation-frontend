import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  {path:"login", component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"cart",component:CartComponent},
];
