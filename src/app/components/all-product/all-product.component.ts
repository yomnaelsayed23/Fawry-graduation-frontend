import { Component } from '@angular/core';
import { ProductsService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { SelectComponent } from '../../shared/components/select/select.component';
import { ProductComponent } from '../product/product.component';
import { RouterLink } from '@angular/router';
import { Product } from '../../product';

@Component({
// providers:,
  selector: 'app-all-product',
  standalone: true,
  imports: [
    NgFor,
    SpinnerComponent,
    NgIf,
    SelectComponent,
  ProductComponent,
RouterLink,
  ],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.scss'
})
export class AllProductComponent {
  products:Product[]=[]
  categoeies:string[]=[]
  loading:boolean =false
  cartProduct:any[]=[]

constructor( private getProductServices:ProductsService){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getProducts()
  this.getCategories()
}

getProducts(){
  this.loading= true
  this.getProductServices.getAllProducts().subscribe((res:any)=>{
  this.products = res
  this.loading= false
},
   error =>{
    this.loading = false
    alert("error")
  }
)
}
getCategories(){
  this.loading = true
  this.getProductServices.getAllCategories().subscribe((res:any)=>{
    // console.log(res);
    this.categoeies = res
    this.loading = false

  })
}
filterProductsByCategory(event:any){
  let value = event.target.value
  this.getSpecificCategory(value)

}
getSpecificCategory(keyword:string){
  this.loading = true
  if(keyword==="all"){

    this.getProducts()
  }else{
    this.loading = true

  this.getProductServices.getProductByCategory(keyword).subscribe((res:any)=>{
    this.products =res
    this.loading = false
  })
}
}
addToCart(event:any){
  if('cart' in localStorage){
   JSON.parse( localStorage.getItem('cart')!)
   let exist = this.cartProduct.find(item => item.item.id  == event.item.id)
   if(exist){
    alert("this product already exist")
   }else{

     this.cartProduct.push(event)
  localStorage.setItem("cart",JSON.stringify(this.cartProduct))
   }
  }else{
this.cartProduct.push(event)
localStorage.setItem("cart",JSON.stringify(this.cartProduct))}

}
}
