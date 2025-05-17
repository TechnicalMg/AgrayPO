import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-admin',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './view-admin.component.html',
  styleUrl: './view-admin.component.css'
})
export class ViewAdminComponent {
  adminId = '';
  admin: any = null;

  constructor(private service: AdminService) {}

  fetchAdmin() {
    this.service.getAdminById(this.adminId).subscribe(data => {
      this.admin = data;
    });
  }
}
