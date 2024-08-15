import { Component } from '@angular/core';
import { MerchantSidebarComponent } from "../merchant-sidebar/merchant-sidebar.component";
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-products',
  standalone: true,
  imports: [MerchantSidebarComponent,
    NgFor
  ],
  templateUrl: './merchant-products.component.html',
  styleUrl: './merchant-products.component.css'
})
export class MerchantProductsComponent {


  constructor(private router:Router){}
  products = [
    {
      image: 'https://example.com/product1.jpg',
      name: 'Product 1',
      price: 29.99,
      description: 'This is the description for Product 1.',
      stockQuantity: 50
    },
    {
      image: 'https://example.com/product2.jpg',
      name: 'Product 2',
      price: 49.99,
      description: 'This is the description for Product 2.',
      stockQuantity: 30
    },
    {
      image: 'https://example.com/product3.jpg',
      name: 'Product 3',
      price: 19.99,
      description: 'This is the description for Product 3.',
      stockQuantity: 100
    }
  ];


  createNewProduct() {
    this.router.navigate(['/create-product'])
    }
}
