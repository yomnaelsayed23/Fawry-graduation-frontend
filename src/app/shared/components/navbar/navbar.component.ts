import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from '../../../components/register/register.component';
import { CartComponent } from '../../../components/cart/cart.component';
import { SearchComponent } from '../../../components/search/search.component';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RegisterComponent,
    CartComponent,
    SearchComponent,
    NgIf

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent   implements OnInit {
  cartCount: number = 0;
  isAuthenticated:boolean = false
  constructor(private cartService: CartService,private authService:AuthService) {}

    ngOnInit() {
      this.authService.user.subscribe({
        next:() =>{
        
          if( this.authService.getToken() != null){
            this.isAuthenticated=true;
          }else{
            this.isAuthenticated=false;
          }
        }
      })
    }


    logout(){
      this.authService.logout()
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    this.isAuthenticated = false;
    }
}
