import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from '../../../components/register/register.component';
import { CartComponent } from '../../../components/cart/cart.component';
import { SearchComponent } from '../../../components/search/search.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RegisterComponent,
    CartComponent,
    SearchComponent,

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  cartCount: number = 0;

  constructor(private cartService: CartService) {}



}
