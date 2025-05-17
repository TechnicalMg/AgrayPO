import { Component , OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { environment } from '../../../../../../../environments/environment';
@Component({
  selector: 'app-assign-user-menu',
  imports: [CommonModule,FormsModule,ReactiveFormsModule, NgSelectModule],
  templateUrl: './assign-user-menu.component.html',
  styleUrl: './assign-user-menu.component.css'
})
export class AssignUserMenuComponent implements OnInit {

  users: any[] = [];
  userMenus: any[] = [];
  selectedUserId: number | null = null;
  assignedMenuIds: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchUserMenus();
    const dbName = sessionStorage.getItem('dbName');
      const userEmail = sessionStorage.getItem('userEmail');
    console.log("userMenu page",dbName);
    console.log(userEmail);
      const userType = sessionStorage.getItem('userType');
  }

  
  getDbHeaders(): HttpHeaders {
    const dbName = sessionStorage.getItem('dbName');
    console.log("dbheaders",dbName);
    return new HttpHeaders({ 'X-DB-Name': dbName ?? '' });
  }
  

  fetchUsers() {
  this.http.get<any>(`${environment.apiBaseUrl}/api/users/all`, {
    headers: this.getDbHeaders()
  }).subscribe({
    next: response => {
      this.users = response.data || [];
    },
    error: err => alert('Error loading users: ' + err.message)
  });
}

  fetchUserMenus() {
    // this.http.get<any[]>('http://localhost:8080/api/usermenu/all').subscribe({
    this.http.get<any[]>(environment.apiBaseUrl+'/api/usermenu/all',{
      headers: this.getDbHeaders()
    }).subscribe({
      next: data => this.userMenus = data,
      error: err => alert('Error loading menus: ' + err.message)
    });
  }


  // backup if not working
  // fetchUserMenus() {
  //   this.http.get<any>(`${environment.apiBaseUrl}/api/usermenu/all`, {
  //     headers: this.getDbHeaders()
  //   }).subscribe({
  //     next: response => {
  //       this.userMenus = response.data || [];
  //     },
  //     error: err => alert('Error loading menus: ' + err.message)
  //   });
  // }

  onUserChange() {
    if (!this.selectedUserId) return;

    // this.http.get<any>(`http://localhost:8080/api/usermenuassignment/get/${this.selectedUserId}`).subscribe({
    // this.http.get<any>(environment.apiBaseUrl+`/api/usermenuassignment/get/${this.selectedUserId}`).subscribe({
    this.http.get<any>(environment.apiBaseUrl+`/api/usermenuassignment/get/${this.selectedUserId}`,{
      headers: this.getDbHeaders()
    }).subscribe({
      next: (response) => {
        this.assignedMenuIds = response.data || [];
      },
      error: (err) => alert('Failed to fetch assigned menus: ' + err.message)
    });
  }


  toggleMenu(menuId: number) {
    const index = this.assignedMenuIds.indexOf(menuId);
    if (index > -1) {
      this.assignedMenuIds.splice(index, 1);
    } else {
      this.assignedMenuIds.push(menuId);
    }
  }

  isChecked(menuId: number): boolean {
    return this.assignedMenuIds.includes(menuId);
  }


  saveAssignment() {
    if (!this.selectedUserId) {
      alert('Please select a user.');
      return;
    }
  
    console.log('Assigning menus to user:', this.selectedUserId);
    console.log('Selected menu IDs:', this.assignedMenuIds);
  
    this.http.post(
      // `http://localhost:8080/api/usermenuassignment/assign/${this.selectedUserId}`,
      // environment.apiBaseUrl+`/api/usermenuassignment/assign/${this.selectedUserId}`,this.assignedMenuIds).subscribe({
      environment.apiBaseUrl+`/api/usermenuassignment/assign/${this.selectedUserId}`,this.assignedMenuIds,{
        headers: this.getDbHeaders()
      }).subscribe({
      next: () => alert('Menus assigned successfully!'),
      error: err => alert('Assignment failed: ' + err.message)
    });
  }

}
