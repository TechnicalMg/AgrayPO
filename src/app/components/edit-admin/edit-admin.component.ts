import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit-admin',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './edit-admin.component.html',
  styleUrl: './edit-admin.component.css'
})
export class EditAdminComponent {
  adminId = '';
  admin: any = {};

  constructor(private service: AdminService) {}

  loadAdmin() {

    console.log(this.adminId);

    
    this.service.getAdminByIdForUpdate(this.adminId).subscribe(data => {
      this.admin = data;
      console.log(this.admin);
    });
  }

  updateAdmin() {
    this.service.updateAdmin(this.admin).subscribe(() => {
      alert('Admin Updated Successfully');
    });
  }
}
