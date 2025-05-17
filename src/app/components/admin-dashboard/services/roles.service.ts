import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../admin-dashboard/models/role.model';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RolesService {
  
  private baseUrl =   environment.apiBaseUrl+'admin/roles';

  constructor(private http: HttpClient) {}

  createRole(role: Role): Observable<any> {
    return this.http.post(`${this.baseUrl}`, role);
  }

  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.baseUrl);
  }

  assignRoles(userId: number, roleIds: number[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/assign`, { userId, roleIds });
  }

  getAssignedRoles(userId: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/assigned/${userId}`);
  }
 

}
