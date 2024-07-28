import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetalRatesService {
  private apiUrl = 'https://metals-api.com/api/latest';
  
  constructor(private http: HttpClient) { }

  getMetalRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
