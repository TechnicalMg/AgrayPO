import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CompanyManagementService {
  
   private baseUrl =   environment.apiBaseUrl+'/admin';
  constructor(private http: HttpClient) { }



  // ---below coorect----
  createCompany(company: any) {
    return this.http.post(`${this.baseUrl}/create-company`, company, { responseType: 'text' });
  }
  
  getAllCompanies() {
    console.log(`${this.baseUrl}/admin/all-companies`);
    return this.http.get<any[]>(`${this.baseUrl}/all-companies`);
  }

  activateCompany(companyId: number) {
    return this.http.put(`${this.baseUrl}/company/activate/${companyId}`, {});
  }

  deactivateCompany(companyId: number) {
    return this.http.put(`${this.baseUrl}/company/deactivate/${companyId}`, {});
  }



  getCompanyById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/company/${id}`);
  }

  // Function to call the backend for selecting the company database
  selectDatabase(companyName: string, adminName: string): Observable<any> {
    const params = new HttpParams()
      .set('companyName', companyName)
      .set('adminName', adminName);

    return this.http.post<any>(`${this.baseUrl}/select-db`, null, { params });
  }

}



