import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from '../../../components/register/register.component';
import { CartComponent } from '../../../components/cart/cart.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RegisterComponent,
    CartComponent

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
