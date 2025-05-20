import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-distributor-registration',
  imports: [FormsModule],
  templateUrl: './distributor-registration.component.html',
  styleUrl: './distributor-registration.component.css'
})
export class DistributorRegistrationComponent {
 distributorForm = {
    name: '',
    gstin: '',
    pan: '',
    email: '',
    contactPerson: '',
    address: '',
    designation: '',
    contactNumber: ''
  };

  registeredDistributors: any[] = [];

  submitForm() {
    const newEntry = {
      ...this.distributorForm,
      sno: this.registeredDistributors.length + 1
    };
    this.registeredDistributors.push(newEntry);
    this.resetForm();
  }

  resetForm() {
    this.distributorForm = {
      name: '',
      gstin: '',
      pan: '',
      email: '',
      contactPerson: '',
      address: '',
      designation: '',
      contactNumber: ''
    };
  }
}
