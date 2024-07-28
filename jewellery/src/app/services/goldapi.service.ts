// goldapi.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoldApiService {
  private apiUrl = 'https://www.goldapi.io/api/XAU/INR';
  private apiKey = 'goldapi-eiig6slxd9vrqo-io'; // Your API key

  constructor(private http: HttpClient) {}

  getGoldPrice(): Observable<any> {
    const headers = new HttpHeaders({
      'x-access-token': this.apiKey,
      'Content-Type': 'application/json'
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
