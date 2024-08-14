import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  SendDataToBackend(model:any){
    return this.http.post('https://fakestoreapi.com/carts',model)
  }
  

  constructor(private http:HttpClient) {


  }




}
