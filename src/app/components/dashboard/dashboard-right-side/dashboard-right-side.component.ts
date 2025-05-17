import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CompanyManagementService } from '../../../services/company-management.service';

import { DashboardService } from '../../../services/dashboard.service'; 
 import { DashboardStats } from '../../../services/dashboard.service';
 
 import {  ElementRef, ViewChild, AfterViewInit } from '@angular/core';
 import { Chart, ChartConfiguration, registerables } from 'chart.js';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-dashboard-right-side',
  imports: [CommonModule],
  templateUrl: './dashboard-right-side.component.html',
  styleUrl: './dashboard-right-side.component.css'
})
export class DashboardRightSideComponent implements OnInit {
  
  @ViewChild('pieCanvas') pieCanvas!: ElementRef<HTMLCanvasElement>;
  pieChart!: Chart;

  dashboardStats: DashboardStats = {
    totalCompanies: 0,
    totalAdmins: 0,
    activeCompanies: 0,
    inactiveCompanies: 0
  };
  
  adminList:any[]=[];

  userManagementList:any[]=[];

  companies: any[] = [];  // Array to hold company data
  displayedColumns: string[] = ['companyName', 'action'];  // Columns for the table


  

  dbName ='';
  userName = '';
  userType = '';
  companyId = '';
  companyName = '';
  userEmail='';
  mainDb='ignitia_db';

  constructor(private router: Router,private adminService: AdminService,
    private companyService: CompanyManagementService,
    private dashboardService: DashboardService,
    private http: HttpClient
  ) {}
  ngOnInit()
  {
    // this.fetchAdmins();
    this.loadDashboardStats();
    this.fetchUserManagementList();
  
  
  
  }


  getDbHeaders(): HttpHeaders {

    const dbName = sessionStorage.getItem('dbName');
    const userName = sessionStorage.getItem('dbName');
    const userType = sessionStorage.getItem('userType');
    const companyId = sessionStorage.getItem('companyId');
    const companyName = sessionStorage.getItem('companyName');
    const userEmail = sessionStorage.getItem('userEmail');

    // const dbName = sessionStorage.getItem('dbName');
    // const companyId = sessionStorage.getItem('companyId') ?? '';
    // const companyName = sessionStorage.getItem('companyName') ?? '';
    console.log("dbheaders",dbName);
    // return new HttpHeaders({ 'X-DB-Name': dbName ?? '' });
   
return new HttpHeaders()
    .set('X-DB-Name', this.mainDb)
    .set('X-Company-Id', this.companyId)
    .set('X-Company-Name', this.companyName)
    .set('X-User-Email', this.userEmail)
    .set('X-User-Name', this.userName)
    .set('X-User-Type', this.userType);


  }


  fetchUserManagementList() {

    // only getting all admins here
    
    // this.adminService.getAllUserManagement(this.getDbHeaders())  .subscribe({
     
    // this.adminService.getAllUserManagement()  .subscribe({
      this.http.get<any[]>(`${environment.apiBaseUrl}/api/user-management-data/users/all`, {
        headers: this.getDbHeaders()
      }).subscribe({
      next: (res: any) => {
        console.log(res);
        this.adminList = res.data;  // ✅ This is the actual array of admins
      },
      error: (err) => console.error('Error fetching admin data', err)
    });

  }





  loadDashboardStats() {
    this.dashboardService.getDashboardStats().subscribe({
      next: (data) => {
        this.dashboardStats = data;
      },
      error: (error) => {
        console.error('Error fetching dashboard stats', error);
      }
    });
  }
  fetchAdmins() {

    
    this.adminService.getAllAdmins().subscribe({
    // this.adminService.getAllUserManagement().subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.adminList = res.data;  // ✅ This is the actual array of admins


      },
      error: (err) => console.error('Error fetching admin data', err)
    });

  }

  
  tableData = [
    { id: 1, companyName: 'Tech Solutions', adminName: 'Shubham' },
    { id: 2, companyName: 'Innovate Corp', adminName: 'John' },
    { id: 3, companyName: 'Global Ventures', adminName: 'Alice' }
  ];

  

 //  SIMPLE CONFIRMATION FOR ACTIVATION
 activateCompany(companyId: number): void {
  const confirmActivate = confirm('Are you sure you want to activate this company?');
  if (confirmActivate) {
    this.companyService.activateCompany(companyId).subscribe({
      next: (res) => {
        alert('Company activated successfully!');
        this.fetchAdmins(); // reload list
      },
      error: (err) => console.error('Error activating company', err)
    });
  }
}



  //  SIMPLE CONFIRMATION FOR DEACTIVATION
  deactivateCompany(companyId: number): void {
    const confirmDeactivate = confirm('Are you sure you want to deactivate this company?');
    if (confirmDeactivate) {
      this.companyService.deactivateCompany(companyId).subscribe({
        next: (res) => {
          alert('Company deactivated successfully!');
          this.fetchAdmins(); // reload list
        },
        error: (err) => console.error('Error deactivating company', err)
      });
    }
  }

  openView(id: number) {
    this.router.navigate(['/side-nav/create-company', id]);
  }
  openViewAdmin(id: number) {
    this.router.navigate(['/side-nav/create-company', id]);
  }
  viewCompany(companyId: number): void {
    // Navigate to the company details view page
    this.router.navigate([`/company/${companyId}`]);
  }










  // openView(id: number) {
  //   // this.router.navigate(['/view-admin', id]); // Replace with your view route
  //   this.router.navigate(['/side-nav/create-company', id]); // Replace with your view route
  // }

  openEdit(id: number) {
    this.router.navigate(['/edit-admin', id]); // Replace with your edit route
  }

  openDelete(id: number) {
    if (confirm('Are you sure you want to delete this admin?')) {
      // this.adminService.deleteAdmin(id).subscribe(() => this.fetchAdmins());

      this.router.navigate(['/delete-admin', id]); // Replace with your delete route
    }
    // this.router.navigate(['/delete-admin', id]); // Replace with your delete route
  }
}
