import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../interfac/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private apiUrl = 'https://your-api-endpoint.com/coupons'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  addCoupon(coupon: Coupon): Observable<Coupon> {
    return this.http.post<Coupon>(this.apiUrl, coupon);
  }

  getCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.apiUrl);
  }




  updateCoupon(id: number, coupon: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, coupon);
  }
}
