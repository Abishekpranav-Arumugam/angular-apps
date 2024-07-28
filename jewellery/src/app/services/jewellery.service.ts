// services/jewellery.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JewelleryService {

  private apiUrl = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) { }

  addOrder(orderData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl, orderData, { headers: headers });
  }
}