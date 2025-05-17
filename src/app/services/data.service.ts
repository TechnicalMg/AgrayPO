import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

   
  private baseUrl =   environment.apiBaseUrl+'/admin'; 
  private formData: { field1: string, field2: string, name: string } = { 
    field1: '', 
    field2: '', 
    name: 'Shubham' 
  };

  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/companies`);
  }
  setData(data: { field1: string, field2: string, name: string }): void {
    this.formData = data;
  }

  getData(): { field1: string, field2: string, name: string } {
    return this.formData;
  }
  
}
