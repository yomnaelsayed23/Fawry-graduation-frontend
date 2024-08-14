import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer/footer.component";



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NavbarComponent,
    FooterComponent
],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartProduct:any[] =[]
  total:number = 0
  success :boolean = false
  constructor(private service:CartService, private router: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCartProduct()
  }
  // get data from localstorage
getCartProduct(){
  if("cart" in localStorage){
    this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
    console.log(this.cartProduct);

  }
  this.getTotalProducts()
  }

  // add more Product (Plus)
  addAmount(index:number){
    this.cartProduct[index].quantity++
    this.getTotalProducts()
    localStorage.setItem('cart', JSON.stringify(this.cartProduct))
  }


  // remove one Product (mins)
  minsAmount(index:number){
    this.cartProduct[index].quantity--
    this.getTotalProducts()
    localStorage.setItem('cart',JSON.stringify(this.cartProduct))
  }
  // detect change in quantity input
  detectChange(){
    this.getTotalProducts()
    localStorage.setItem('cart', JSON.stringify(this.cartProduct))
  }

  // delete Specific Product
  deleteProduct(index:number){
    this.cartProduct.splice(index,1)
    this.getTotalProducts()

    localStorage.setItem('cart', JSON.stringify(this.cartProduct))

  }

  // clear All Products
  clearProducts(){
    this.cartProduct= []
    this.getTotalProducts()

    localStorage.setItem('cart', JSON.stringify(this.cartProduct))

  }

  // Send Cart Data To Backend
  addCartToBackend(){
    let products = this.cartProduct.map(item=>{
      return {productId:item.item.id,quantity:item.quantity}
    })

    let model = {
      userId:5,
      date: new Date,
      products:products
    }
    console.log(model)
    this.service.SendDataToBackend(model).subscribe((res:any) =>
      this.success = true)
    this.router.navigate(['/payment'])

  }
  // to calculate Total products
  getTotalProducts(){
    this.total = 0
    for(let x in this.cartProduct){
      this.total += this.cartProduct[x].item.price * this.cartProduct[x].quantity
    }
  }



}
