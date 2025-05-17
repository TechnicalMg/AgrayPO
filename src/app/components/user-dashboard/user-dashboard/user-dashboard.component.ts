import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  imports: [RouterModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  username = history.state?.user || 'User';

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/user-login']); // route to login
  }
}
