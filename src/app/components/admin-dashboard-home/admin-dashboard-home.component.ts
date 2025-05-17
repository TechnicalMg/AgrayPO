import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CompanyManagementService } from '../../services/company-management.service';
import { DashboardService } from '../../services/dashboard.service';
//  import {  from '../../services/dashboard.service';
import { AdminDashboardHomeService, AdminDashboardStats } from '../../services/admin-dashboard-home.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin-dashboard-home',
  imports: [CommonModule],
  templateUrl: './admin-dashboard-home.component.html',
  styleUrl: './admin-dashboard-home.component.css'
})
export class AdminDashboardHomeComponent implements OnInit {
  


  AdmindashboardStats: AdminDashboardStats = {
    totalUsers: 0,
    totalUserMenus: 0,
    assignments: []
  };
  
  


  constructor(private router: Router,private adminService: AdminService,
    private companyService: CompanyManagementService,
    private admindashboardService: AdminDashboardHomeService,
    private http: HttpClient
  ) {}
  ngOnInit()
  {
    // this.admindashboardService.getAdminDashboardStats().subscribe(data => {
    //   this.AdmindashboardStats = data;
    // });

    this.datashow();

  }
  

  private baseUrl =   environment.apiBaseUrl+ '/api/admin-dashboard';  
getDbHeaders(): HttpHeaders {
    const dbName = sessionStorage.getItem('dbName');
    console.log("dbheaders",dbName);
    return new HttpHeaders({ 'X-DB-Name': dbName ?? '' });
  }
    datashow()
    {
      this.http.get<AdminDashboardStats>(`${this.baseUrl}/stats`, {
        headers: this.getDbHeaders()
      }).subscribe({
        next: (data) => {
          this.AdmindashboardStats = data;
          
        },
        error: (err) => alert('Unable to fetch data ' + err.message),
      });
    }




  
  

  




}
