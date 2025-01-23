import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { get } from 'http';

@Injectable({
  providedIn: 'root',
})
export class AgroServiceService {
  private baseUrlAd = 'http://127.0.0.1:5000/ads';
  private baseUrlLog = "http://localhost:8077/api/user/login";
  private baseUrlAuth= "http://localhost:8077/api/user/reg";

  private profileData: { name: string; email: string; phone: number } | null = null;

  


  constructor(private http: HttpClient) {}
  setProfileData(data: { name: string; email: string; phone: number }) {
    this.profileData = data;
  }
  getProfileData(user_id: any) {
    return this.http.get(`http://localhost:8077/api/user/${user_id}`);
  }

  // Метод для POST-запиту
  addAd(adData: any): Observable<any> {
    return this.http.post(`${this.baseUrlAd}/add`, adData);

  }
  addAdWithImages(formData: FormData) {
    return this.http.post('/api/ads/add', formData);
  }

  signIn(Sign: any): Observable<any> {
    console.log(Sign)
    return this.http.post(this.baseUrlLog, Sign);
  }
  Reg(regi: any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.baseUrlAuth, regi);

  }
  
}

