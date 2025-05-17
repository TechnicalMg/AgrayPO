import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-super-admin-login',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './super-admin-login.component.html',
  styleUrl: './super-admin-login.component.css'
})
export class SuperAdminLoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private service: AdminService,
     private router: Router,
     private snackBar: MatSnackBar) {}

  login() {
    this.service.loginSuperAdmin(this.username, this.password).subscribe({
      next: () => this.router.navigate(['side-nav/right-side'], { state: { user: this.username } }),
      // next: () => this.router.navigate(['/dashboard'], { state: { user: this.username } }),
//       error: () =>{
// this.error = 'Invalid Credentials';
// alert(this.error); // Simple popup alert
//       } 


 error: () => {
      this.error = 'Invalid Credentials';
      this.snackBar.open(this.error, 'Close', {
        duration: 3000, // in milliseconds
        panelClass: ['snackbar-error'], // optional custom styling
        horizontalPosition: 'center',  // 'start' | 'center' | 'end' | 'left' | 'right'
        verticalPosition: 'top'       // 'top' | 'bottom'
      });
    }

    });
  }




}
