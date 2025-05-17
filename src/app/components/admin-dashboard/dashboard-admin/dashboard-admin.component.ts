import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


import { Router, RouterOutlet } from '@angular/router';
import { CreateAdminComponent } from '../../create-admin/create-admin.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    CreateAdminComponent,
    RouterModule,
    CommonModule,
  ]
})
// export class DashboardAdminComponent {
export class DashboardAdminComponent implements OnInit {


  logoUrl: string = '';



  // companyName: string = '';
  companyLogoUrl: string = '';



  
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );



    constructor(public router: Router,
      private http: HttpClient
    ) {}

    isExpanded = true;
     dbName ='';
       userName = '';
       userType = '';
       companyId = '';
       companyName = '';
       userEmail='';

    ngOnInit() {
      const dbName = sessionStorage.getItem('dbName');
      const userEmail = sessionStorage.getItem('userEmail');
    console.log(dbName);
    console.log(userEmail);
      const userType = sessionStorage.getItem('userType');

      this.getDbHeaders();
      this.getCompanyDetails()
      
    }

      mainDb='ignitia_db';
    

    getDbHeaders(): HttpHeaders {
       this.dbName = sessionStorage.getItem('dbName') ?? '';
       this.userName = sessionStorage.getItem('userName') ?? '';
       this.userType = sessionStorage.getItem('userType') ?? '';
       this.companyId = sessionStorage.getItem('companyId') ?? '';
       this.companyName = sessionStorage.getItem('companyName') ?? '';
       this.userEmail = sessionStorage.getItem('userEmail') ?? '';

      // console.log("dbheaders",this.dbName);
      // return new HttpHeaders({ 'X-DB-Name': this.dbName ?? '' });


      return new HttpHeaders()
    .set('X-DB-Name', this.mainDb)
    .set('X-Company-Id', this.companyId)
    .set('X-Company-Name', this.companyName)
    .set('X-User-Email', this.userEmail)
    .set('X-User-Name', this.userName)
    .set('X-User-Type', this.userType);



      
    }
//     

getCompanyDetails() {
  this.http.get<any>(environment.apiBaseUrl + '/admin/company-logo/info', {
    headers: this.getDbHeaders()
  }).subscribe({
    next: response => {
      console.log("Company Details Response", response);

      // this.companyName = response.companyName;
      if (response.logo) {
        this.logoUrl = 'data:image/png;base64,' + response.logo;
      }
      // this.logoUrl = response.logo
      //   ? 'data:image/png;base64,' + response.companyLogo
      //   : '';
    },
    error: (err) => console.error('Failed to fetch company details', err)
  });
}



    adminUsername = history.state?.user || 'Admin';
    
      logout() {
        sessionStorage.clear();
        this.router.navigate(['/login']);
      }
  

    toggleSidenav(): void {
      this.isExpanded = !this.isExpanded;
    }


}
