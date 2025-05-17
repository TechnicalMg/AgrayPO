import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../../environments/environment';
@Component({
  selector: 'app-delete-user',
  imports: [],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent implements OnInit{
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    // this.http.get<any[]>('http://localhost:8080/api/users').subscribe(data => this.users = data);
    this.http.get<any[]>(environment.apiBaseUrl+'/api/users').subscribe(data => this.users = data);
  }

  deleteUser(userId: number) {
    if (confirm('Are you sure?')) {
      // this.http.delete(`http://localhost:8080/api/users/${userId}`).subscribe(() => this.loadUsers());
      this.http.delete(environment.apiBaseUrl+`/api/users/${userId}`).subscribe(() => this.loadUsers());
    }
  }
}
