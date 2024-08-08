import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }


  getAllProducts(){
  return this._http.get('https://fakestoreapi.com/products')
  }

  getAllCategories(){
    return this._http.get('https://fakestoreapi.com/products/categories')
  }

  getProductByCategory(keyword:string){
    return this._http.get(`https://fakestoreapi.com/products/category/${keyword}`)
  }

  getDetailsProduct(id:number){
    return this._http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
