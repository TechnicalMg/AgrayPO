import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-user',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  userType = 'Admin';
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin123' && this.userType === 'Admin') {
      this.router.navigate(['/admin-dashboard'], { state: { username: this.username } });
    } else if (this.username === 'user' && this.password === 'user123' && this.userType === 'User') {
      this.router.navigate(['/user-dashboard'], { state: { username: this.username } });
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
