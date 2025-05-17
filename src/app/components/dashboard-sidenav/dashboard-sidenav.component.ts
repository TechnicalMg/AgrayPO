import { Component, inject } from '@angular/core';
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
import { CreateAdminComponent } from '../create-admin/create-admin.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrl: './dashboard-sidenav.component.css',
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
export class DashboardSidenavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(public router: Router) {}

    isExpanded = true;


  

    toggleSidenav(): void {
      this.isExpanded = !this.isExpanded;
    }
  // toggleSidenav() {
  //   this.isExpanded = !this.isExpanded;
  // }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
