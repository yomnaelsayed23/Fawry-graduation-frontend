import { Component } from '@angular/core';
import { MerchantSidebarComponent } from "../merchant-sidebar/merchant-sidebar.component";
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { CreateProductService } from '../services/create-product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-merchant-products',
  standalone: true,
  imports: [MerchantSidebarComponent,
    NgFor,
    FormsModule,

  ],
  templateUrl: './merchant-products.component.html',
  styleUrl: './merchant-products.component.css'
})
export class MerchantProductsComponent {


  constructor(private router:Router ,private productService:CreateProductService){}
  products = [
    {
      id:4,
      image: 'https://example.com/product1.jpg',
      name: 'Product 1',
      price: 29.99,
      description: 'This is the description for Product 1.',
      stockQuantity: 50
    },
    {
      id:5,

      image: 'https://example.com/product2.jpg',
      name: 'Product 2',
      price: 49.99,
      description: 'This is the description for Product 2.',
      stockQuantity: 30
    },
    {
      id:7,

      image: 'https://example.com/product3.jpg',
      name: 'Product 3',
      price: 19.99,
      description: 'This is the description for Product 3.',
      stockQuantity: 100
    }
  ];


  createNewProduct() {
    this.router.navigate(['/merchent-dashboard'])
    }
    selectedProduct = { id:0 ,name: '', price: 0, description: '', stockQuantity: 0 };


    onSubmit() {
      this.productService.updateProduct(this.selectedProduct.id, this.selectedProduct).subscribe(
        (response:any) => {
          console.log('Product updated:', response);
          // this.loadProducts();
          // Reload products after update

        },
        (error:any) => {
          console.error('Error updating product:', error);
        }
      );
    }

}
