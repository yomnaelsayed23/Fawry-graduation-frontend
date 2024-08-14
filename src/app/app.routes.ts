import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SearchListComponentComponent } from './components/search-list-component/search-list-component.component';
import { AccountSettingsComponent } from './components/vendorDashboard/account-settings/account-settings.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { MerchantsComponent } from './admin/merchants/merchants.component';
import { ShowAllUsersComponent } from './admin/show-all-users/show-all-users.component';
import { ShowAdminsComponent } from './admin/show-admins/show-admins.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
// import { AdminDashboardComponent } from './components/admin/AdminDashboardComponent';
// import { CategoriesComponent } from './components/admin/categories/categories.component';
// import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
// import { PaymentMethodsComponent } from './components/admin/payment-methods/payment-methods.component';
// import { PromoCodesComponent } from './components/admin/promo-codes/promo-codes.component';
// import { VendorsComponent } from './components/admin/vendors/vendors.component';
// import { VendorDashboardComponent } from './components/vendorDashboard/vendor-dashboard/vendor-dashboard.component';
// import { AddProductComponent } from './components/vendorDashboard/add-product/add-product.component';
// import { EditProductComponent } from './components/vendorDashboard/edit-product/edit-product.component';
// import { PromocodesComponent } from './components/vendorDashboard/promocodes/promocodes.component';
// import { RatingsComponent } from './components/vendorDashboard/ratings/ratings.component';
// import { SideBarComponent } from './components/vendorDashboard/side-bar/side-bar.component';
// import { VendorOrdersComponent } from './components/vendorDashboard/vendor-orders/vendor-orders.component';
// import { VendorProductsComponent } from './components/vendorDashboard/vendor-products/vendor-products.component';

export const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"details/:id", component:ProductsDetailsComponent},
  {path:"profile", component:UserProfileComponent},
  {path:"register",component:RegisterComponent},
  {path:"cart",component:CartComponent},
  {path:"payment",component:PaymentComponent},
  {path:"searchlist",component:SearchListComponentComponent},
  {path:"login", component:LoginComponent},


  // {path:"admin", component:AdminDashboardComponent},
  {path:"admin/dashboard", component:AdmindashboardComponent},
  {path:"show-admins", component:ShowAdminsComponent},
  {path:"create-admins", component:CreateAdminComponent},
  {path:"showallusers", component:ShowAllUsersComponent},
  {path:"merchents", component:AdmindashboardComponent},
  // {path:"admin/dasboard/merchants", component:AdmindashboardComponent},
  // {path:"admin/categories", component:CategoriesComponent},
  // // {path:"admin/categories", component:CategoriesComponent},e:\revision angular projects\2p\dashboard\src\app\auth\components\register
  // {path:"login-admin", component:LoginAdminComponent},
  // {path:"admin/payment-methods", component:PaymentMethodsComponent},
  // {path:"admin/promo-codes", component:PromoCodesComponent},
  // {path:"admin/vendors", component:VendorsComponent},


  // {path:"vendor/dashboard", component:VendorDashboardComponent},
  // {path:"vendor/dashboard/account-setting", component:AccountSettingsComponent},
  // {path:"vendor/dashboard/add-product", component:AddProductComponent},
  // {path:"vendor/dashboard/edit-product", component:EditProductComponent},
  // {path:"vendor/dashboard/promocodes", component:PromocodesComponent},
  // {path:"vendor/dashboard/ratings", component:RatingsComponent},
  // {path:"vendor/dashboard/side-bar", component:SideBarComponent},
  // {path:"vendor/dashboard/orders", component:VendorOrdersComponent},
  // {path:"vendor/dashboard/products", component:VendorProductsComponent},


    {path:"**",redirectTo:"home",pathMatch:"full"},

];
