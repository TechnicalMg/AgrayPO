import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryCodeService {

  private apiUrl = 'https://api.countrystatecity.in/v1/countries/IN/states'; // Correct endpoint
  constructor(private http: HttpClient) { }

  getStates(): Observable<any> {
    const headers = new HttpHeaders({
      'X-CSCAPI-KEY': 'API_KEY_HERE' // Replace with your actual API Key
    });

    return this.http.get(this.apiUrl, { headers: headers });
  }

}
