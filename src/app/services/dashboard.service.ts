import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface DashboardStats {
  totalCompanies: number;
  totalAdmins: number;
  activeCompanies: number;
  inactiveCompanies: number;
}
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // private baseUrl = 'http://localhost:8080/api/dashboard';
  private baseUrl =   environment.apiBaseUrl+'/api/dashboard';
  constructor(private http: HttpClient) { }

  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.baseUrl}/stats`);
  }
}
