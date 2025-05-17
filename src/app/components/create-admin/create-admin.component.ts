import { Component ,OnInit} from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CompanyManagementService } from '../../services/company-management.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-admin',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './create-admin.component.html',
  styleUrl: './create-admin.component.css'
})
export class CreateAdminComponent implements OnInit {
  


  adminForm: FormGroup;
  companies: any[] = [];
  wowselectedCompanyId: string = '';
  filteredCompanyIds: any[] = [];
  // field1: string | null = '';
  // field2: string | null = '';


  constructor(private fb: FormBuilder, private adminService: AdminService,
     private companyService: CompanyManagementService,
     private route: ActivatedRoute,
     private snackBar: MatSnackBar) {
    this.adminForm = this.fb.group({
      companyName: ['', Validators.required],
      // companyId: [''],
      adminName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      adminEmail: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]], // Accepts 10–15 digits
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatch });
  }

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe((data: any[]) => this.companies = data);
   
   
  }


  onCompanyChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedCompanyName = selectElement.value;
      // Log the companies array to ensure it contains the correct structure
  console.log('Companies:', this.companies);
    const selectedCompany = this.companies.find(c => c.companyName === selectedCompanyName);
    if (selectedCompany) {
      // Set companyId to the variable, not the form
      this.wowselectedCompanyId = selectedCompany.id;
      console.log('Fetched Company Id:', this.wowselectedCompanyId);
    }
  }


  passwordMatch(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }



  onSubmit(): void {
    if (this.adminForm.valid) {
      const payload = {
        companyName: this.adminForm.value.companyName,
        companyId:this.wowselectedCompanyId,
        adminName: this.adminForm.value.adminName,
        adminEmail: this.adminForm.value.adminEmail,
        phoneNumber: this.adminForm.value.phoneNumber,
        password: this.adminForm.value.password
      };
      console.log('Payload:', payload);
      console.log('Selected Company ID:', this.wowselectedCompanyId);
  
    //   this.adminService.createAdmin(payload, Number(this.wowselectedCompanyId)).subscribe(
    //   // this.adminService.createAdmin(payload).subscribe(
    //     res => {
    //       // alert('Admin created successfully!');
    //       this.snackBar.open('Company saved successfully!', 'Close', { duration: 3000 });
    //       this.adminForm.reset(); 
    //     },
    //     err => {
    //       console.error('Error:', err);
    //       // alert('Error creating admin');
    //       console.error('Save Error:', err);
    //       this.snackBar.open(err.error, 'Close', { duration: 5000 });
    //     }
    //   );
    // } 
    this.adminService.createAdmin(payload, Number(this.wowselectedCompanyId)).subscribe(
      res => {
        this.snackBar.open('Admin created successfully!', 'Close', { duration: 3000 });
        this.adminForm.reset(); 
      },
      err => {
        console.error('Error:', err);
        this.snackBar.open(err?.error || 'Error creating admin.', 'Close', { duration: 5000 });
      }
    );
  }
   
    else {
      alert('Form is invalid. Please check inputs.');
    }
  }

}
