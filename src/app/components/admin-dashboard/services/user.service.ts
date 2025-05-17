import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../admin-dashboard/models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl =   environment.apiBaseUrl+'/admin/users';
  constructor(private http: HttpClient) {}


  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUsersWithRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/with-roles`);
  }


}
