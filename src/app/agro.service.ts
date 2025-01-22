import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgroServiceService {
  private baseUrl = 'http://127.0.0.1:5000/ads';

  constructor(private http: HttpClient) {}

  // Метод для POST-запиту
  addAd(adData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, adData);
  }
}
