import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  username = history.state?.user || 'Super Admin';
  // data: any;
  isCollapsed = false;
  // data = { 
  //   field1: '',  // Initialize with empty values
  //   field2: '', 
  //   name: 'Shubham' // Default name
  // };
  
  data:any;
  constructor(private router: Router, private dataService: DataService,private route: ActivatedRoute) {
// Override with service data (if it exists)
const serviceData = this.dataService.getData();
if (serviceData) this.data = serviceData

  }

  ngOnInit(): void {
   
    this.route.queryParams.subscribe(params => {
      this.data = {
        field1: params['field1'],
        field2: params['field2'],
        name: params['name']
      };
    });
  }
   

   
    // Initialize data after the component is created
   
   
   
    // this.data = this.dataService.getData();
    
    // Check if user is logged in and get username
    // For example:
    // this.username = localStorage.getItem('username') || 'Super Admin';
    
    // Check screen size and set initial sidebar state
  //   this.checkScreenSize();
  //   window.addEventListener('resize', this.checkScreenSize.bind(this));
  // }

  logout() {
    this.router.navigate(['/']);
  }

  checkScreenSize(): void {
    if (window.innerWidth < 992) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }
  // logout(): void {
  //   // Clear local storage/session
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('username');
    
  //   // Navigate to login page
  //   this.router.navigate(['/login']);
  // }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
