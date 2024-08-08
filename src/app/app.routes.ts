import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"details/:id", component:ProductsDetailsComponent},

  {path:"login", component:LoginComponent},
  {path:"profile", component:UserProfileComponent},
    {path:"register",component:RegisterComponent},
    {path:"cart",component:CartComponent},
];
