import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  
  private baseUrl =   environment.apiBaseUrl+'/admin';
  constructor(private http: HttpClient) { }

  loginUserAdmin(username: string, password: string) {
    return this.http.post(`${this.baseUrl }/superadmin/login`, {
      superAdminUsername: username,
      password: password
    }, { responseType: 'text' });
  }

}
