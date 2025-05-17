import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminUserLoginService {

  private baseUrl =   environment.apiBaseUrl+'/admin';
  constructor(private http: HttpClient) { }

  loginAdmin(username: string, password: string) {
    return this.http.post(`${this.baseUrl }/admin-user/login`, {
      AdminUsername: username,
      password: password
    }, { responseType: 'text' });
  }




}
