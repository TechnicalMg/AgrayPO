import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyManagementService } from '../../services/company-management.service';
import { CommonModule, FormStyle } from '@angular/common';
@Component({
  selector: 'app-compan-db-selection',
  imports: [CommonModule,],
  templateUrl: './compan-db-selection.component.html',
  styleUrl: './compan-db-selection.component.css'
})
export class CompanDbSelectionComponent {
  // companyName: string = '';
  // adminName: string = '';
  // errorMessage: string = '';
  // successMessage: string = '';

  // constructor(private companyService: CompanyManagementService  , private router: Router) {}

  // selectCompanyDb() {
  //   if (this.companyName && this.adminName) {
  //     // Call the service to validate the company and admin
  //     this.companyService.selectDatabase(this.companyName, this.adminName).subscribe({
  //       next: (res: any) => {
  //         if (res.success) {
  //           // Successfully validated, switch to selected company DB
  //           this.successMessage = 'Database switched successfully!';
  //           // Redirect to the admin-user login page
  //           this.router.navigate(['/admin-user-login']);
  //         } else {
  //           this.errorMessage = 'Invalid company name or admin name.';
  //         }
  //       },
  //       error: (err) => {
  //         console.error('Error selecting database', err);
  //         this.errorMessage = 'An error occurred. Please try again.';
  //       }
  //     });
  //   } else {
  //     this.errorMessage = 'Please enter both company name and admin name.';
  //   }
  // }
}
