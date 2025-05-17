import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { CreateAdminComponent } from '../../create-admin/create-admin.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ViewUpdateUserComponent } from '../../admin-dashboard/dashboard-admin/components/User/view-update-user/view-update-user.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.css',
  imports: [
    MatToolbarModule,     
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    AsyncPipe,
    RouterOutlet,
    CreateAdminComponent,
    RouterModule,
    CommonModule,
    ViewUpdateUserComponent,
    
  ]
})
export class DashboardUserComponent  implements OnInit{
// export class DashboardUserComponent  {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    dbName ='';
    userName = '';
    userType = '';
    companyId = '';
    companyName = '';
    userEmail='';
    mainDb='ignitia_db';
    logoUrl: string = '';
    username = history.state?.user || 'User';

  constructor(private router: Router, private dialog: MatDialog  ,
    private http: HttpClient) {}

    ngOnInit(): void {
      const dbName = sessionStorage.getItem('dbName');
      const userEmail = sessionStorage.getItem('userEmail');
    console.log(dbName);
    console.log(userEmail);
    // console.log(this.username)
      const userType = sessionStorage.getItem('userType');
      this.getDbHeaders();
      this.getCompanyDetails()

    }
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




  logout() {
    this.router.navigate(['/user-login']); // route to login
  }
  isExpanded = true;
  toggleSidenav(): void {
    this.isExpanded = !this.isExpanded;
  }
  openProfileOverlay(): void {
    this.dialog.open(ViewUpdateUserComponent, {
      width: '600px', // adjust width
      height:'500px',
      panelClass: 'custom-dialog-container' ,// optional custom CSS
      position: { right: '20px', top: '100px' }
    });
  }
}
