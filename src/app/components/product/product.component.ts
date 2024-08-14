import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';
import { Product } from '../../product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,

    RouterLink,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
@Input() data!:Product
@Output() item = new EventEmitter
// @Input() product: any;
addButton:boolean =false
amount:number = 0

// add(){
// this.item.emit({item:this.data,quantity:this.amount})
// }
cartamount: number = 1;
// addButton: boolean = false;

constructor(private cartService: CartService) {}


add() {
 
this.item.emit({item:this.data,quantity:this.amount})


}

}
