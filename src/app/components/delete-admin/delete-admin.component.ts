import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-delete-admin',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './delete-admin.component.html',
  styleUrl: './delete-admin.component.css'
})
export class DeleteAdminComponent {
  adminIds: string[] = [];
  selectedAdminId: string = '';

  constructor(private service: AdminService) {}

  ngOnInit(): void {
    this.service.getAllAdminIds().subscribe(ids => this.adminIds = ids);
  }

  deleteAdmin() {
    this.service.deleteAdmin(this.selectedAdminId).subscribe(() => {
      alert('Admin Deleted!');
    });
  }
}
