import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  // SendDataToBackend(model:any){
  //   return this.http.post('https://fakestoreapi.com/carts',model)
  // }


  constructor(private http:HttpClient) {

    // const storedCount = localStorage.getItem('cartCount');
    
// this.cartCountSubject.next(storedCount !== null ? +storedCount : 0);


  }

  // private cartCountSubject = new BehaviorSubject<number>(0);
  // cartCount$ = this.cartCountSubject.asObservable();




  // Method to add an item to the cart
  // addToCart() {
  //   const updatedCount = this.cartCountSubject.value + 1;
  //   this.cartCountSubject.next(updatedCount);
  //   localStorage.setItem('cartCount', updatedCount.toString());
  // }

  // Method to retrieve the current cart count (if needed directly)
  // getCartCount(): number {
  //   return this.cartCountSubject.value;
  // }


}
