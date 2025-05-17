import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface AdminDashboardStats {
  totalUsers: number;
  totalUserMenus: number;
  assignments: { userName: string, menuNames: string[] }[];
}
@Injectable({
  providedIn: 'root'
})
export class AdminDashboardHomeService {
  // private baseUrl = 'http://localhost:8080/api/admin-dashboard';  
  private baseUrl =   environment.apiBaseUrl+ '/api/admin-dashboard';  
  
  constructor(private http: HttpClient) { }
  getAdminDashboardStats() {
    return this.http.get<AdminDashboardStats>(`${this.baseUrl}/stats`);
  }
}
