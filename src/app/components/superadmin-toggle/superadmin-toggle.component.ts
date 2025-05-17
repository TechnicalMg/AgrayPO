import { Component ,AfterViewInit, Renderer2, OnInit  } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyManagementService } from '../../services/company-management.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-superadmin-toggle',
  imports: [CommonModule,FormsModule],
  templateUrl: './superadmin-toggle.component.html',
  styleUrl: './superadmin-toggle.component.css'
})
export class SuperadminToggleComponent implements OnInit, AfterViewInit{

  field1: string = '';  // Add the missing field here
  field2: string = '';  // Add another field for PAN, etc.
  companies: any[] = [];
  formData = {
    company: '',
    adminName: '',
    companyName: '',
    pan: '',
    gstin: '',
    field1:'',
    field2:'',
  };

  constructor(private dataService: DataService, private router: Router,private companyService: CompanyManagementService) {}

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe({
      next: (response) => {
        this.companies = response;
        console.log('Companies:', this.companies);
      },
      error: (err) => {
        console.error('Failed to fetch companies', err);
      }
    });
  }
                  
  ngAfterViewInit(): void {
    const switch1 = document.getElementById('switch1');
    const switch2 = document.getElementById('switch2');

    const loginMsg = document.querySelector('.loginMsg') as HTMLElement;
    const signupMsg = document.querySelector('.signupMsg') as HTMLElement;
    const login = document.querySelector('.login') as HTMLElement;
    const signup = document.querySelector('.signup') as HTMLElement;
    const frontbox = document.querySelector('.frontbox') as HTMLElement;

    if (switch1 && switch2 && loginMsg && signupMsg && login && signup && frontbox) {
      switch1.addEventListener('click', () => {
        loginMsg.classList.toggle('visibility');
        frontbox.classList.add('moving');
        signupMsg.classList.toggle('visibility');
        signup.classList.toggle('hide');
        login.classList.toggle('hide');
      });

      switch2.addEventListener('click', () => {
        loginMsg.classList.toggle('visibility');
        frontbox.classList.remove('moving');
        signupMsg.classList.toggle('visibility');
        signup.classList.toggle('hide');
        login.classList.toggle('hide');
      });

      setTimeout(() => switch1.click(), 1000);
      setTimeout(() => switch2.click(), 3000);
    }
  }
  onSubmit() {
   
    this.router.navigate(['/side-nav/create-company'], {
      // queryParams: {
      //   field1: this.formData.field1,
      //   field2: this.formData.field2,
      //   name: this.formData.name
      // }
    });
   
   
   
    // console.log("submitted ",this.formData);
    // this.dataService.setData(this.formData);
    // this.router.navigate(['/dashboard/create-company']);

   
  }
  // redirectToDashboard(e) {
  //   e.preventDefault();
  //   const field1 = document.getElementById('field1').value;
  //   const field2 = document.getElementById('field2').value;
  //   const name = document.getElementById('name').value;
  //   window.location.href = `/dashboard?field1=${field1}&field2=${field2}&name=${name}`;
  // }

onSubmitAdmin()
{
  this.router.navigate(['/side-nav/create-admin'], {
    queryParams: {
      field1: this.formData.field1,
      field2: this.formData.field2,
    
    }
  });
}


}
