import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

 
    
   private baseUrl =   environment.apiBaseUrl;
  // private baseUrl  = 'http://localhost:8081/super-admin-erp/admin';
  // private ServerUrl_baseurl for local   = 'http://localhost:8080/admin';
  constructor(private http: HttpClient) { }

  loginSuperAdmin(username: string, password: string) {
    return this.http.post(`${this.baseUrl }/admin/superadmin/login`, {
    // return this.http.post(`${this.baseUrl }/superadmin/login`, {
      superAdminUsername: username,
      password: password
    }, { responseType: 'text' });
  }



//this was to save in single db 
  // createAdmin(admin: any) {
  //   return this.http.post(`${this.baseUrl}/create-admin`, admin, { responseType: 'text' });
  // }

  // now to save in multiple dbs
  createAdmin(admin: any, companyId: number): Observable<any> {
    const params = new HttpParams().set('companyId', companyId.toString());
    console.log("company iD"+companyId.toString());
    // return this.http.post(`${this.baseUrl}/admin/create-admin`, admin, { params });
    return this.http.post(`${this.baseUrl}/admin/create-admin`, admin, {  params, responseType: 'text' as 'json' });
  }




  



  getAdminById(id: string) {
    // return this.http.get(`${this.baseUrl}/${id}`);
    return this.http.get(`${this.baseUrl}/view/${id}`);
  }
  getAdminByIdForUpdate(id: string) {
    // return this.http.get(`${this.baseUrl}/${id}`);
    console.log(`${this.baseUrl}/view/${id}`);
    return this.http.get(`${this.baseUrl}/view/${id}`);
  }

  updateAdmin(admin: any) {
    // return this.http.put(`${this.baseUrl}/update`, admin);
    return this.http.put(`${this.baseUrl}/edit/${admin.id}`, admin);
  }

  deleteAdmin(id: string) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  getAllAdminIds() {
    return this.http.get<string[]>(`${this.baseUrl}/ids`);
  }


  


  getAdminsWithCompanyStatus(): Observable<any[]> {
    return this.http.get<any[]>(   `${this.baseUrl}//admin/admins-with-company-status`);
    
  } 
  
  
  
  
  
  
  getAllCompanies() {
    return this.http.get<any[]>(   `${this.baseUrl}/admin/all-companies`);
  }
  getAllAdminsWithStatus() {
    return this.http.get<any[]>( `${this.baseUrl}/admin/all-companies`);
  }


  getAllAdmins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/admin/all-admins`); // your backend URL
  }
  
  // deleteAdmin(id: number): Observable<any> {



    getAllUserManagement(): Observable<any[]> {
    // return this.http.get<any[]>(`${this.baseUrl} /api/user-management-data/users/all` ,{headers}); // your backend URL
    return this.http.get<any[]>(`${this.baseUrl} /api/user-management-data/users/all`); // your backend URL
  }

  
  // deleteAdmin(id: number): Observable<any> {
  //   return this.http.delete(`http://localhost:8080/api/admins/${id}`);
  // }

}
