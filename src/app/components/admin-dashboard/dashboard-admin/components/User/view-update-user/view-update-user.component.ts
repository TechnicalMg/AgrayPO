import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-view-update-user',
  imports: [CommonModule,FormsModule,ReactiveFormsModule, MatDialogModule],
  templateUrl: './view-update-user.component.html',
  styleUrl: './view-update-user.component.css'
})
export class ViewUpdateUserComponent implements OnInit{
  // user: any[] = [];
  user: any = {};
  selectedUser: any = null;

  dbName ='';
  userId='';
  userName = '';
  userType = '';
  companyId = '';
  companyName = '';
  userEmail='';
  maindb ='ignitia_db';
  passwordError = '';
  currentPassword = '';
  showChangePassword = false;

  toggleChangePassword() {
    this.showChangePassword = !this.showChangePassword;

    // Clear password fields if cancelled
    if (!this.showChangePassword) {
      this.user.password = '';
      this.user.confirmPassword = '';
      this.passwordError = '';
    }
  }


  validatePassword() {
    const { password } = this.user;
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
    this.passwordError = regex.test(password) ? '' : 'Password must be 8–20 chars, include uppercase, lowercase, number & symbol.';
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDbHeaders();
    this.getUsers(this.userEmail);
    
  }


  getUsers(userEmail:string) {
    this.http.get<any>(`${environment.apiBaseUrl}/api/user-management-data/users/email/${userEmail}`, {
      headers: this.getDbHeaders()
    }).subscribe({
      next: response => {
        this.user = response.data || [];
        console.log("user data",this.user);
        console.log("user repsone data",response.data || []);

      },
      error: (err) => alert('Failed to fetch users')
    });
  }


  editUser(user: any) {
    this.selectedUser = { ...user };
  }


  getDbHeaders(): HttpHeaders {
    this.dbName = sessionStorage.getItem('dbName') ?? '';
    this.userName = sessionStorage.getItem('userName') ?? '';
    this.userType = sessionStorage.getItem('userType') ?? '';
    this.companyId = sessionStorage.getItem('companyId') ?? '';
    this.companyName = sessionStorage.getItem('companyName') ?? '';
    this.userEmail = sessionStorage.getItem('userEmail') ?? '';


   console.log("dbheaders",this.dbName);
   console.log("userEmail",this.userEmail);
   console.log("companyName",this.companyName);

   return new HttpHeaders({ 'X-DB-Name': this.maindb ?? '' });
 }


showUserId()
{
  console.log("userId",this.user.userId);
}

 onSubmit() {

    console.log("currentPassword",this.currentPassword);
    console.log("user Password",this.user.password);

  // if (this.currentPassword == this.user.Password) {
  //   alert('Passwords is invalid');
  //   return;
  // }

  if (!this.currentPassword) {
    alert('Current password is required');
    return;
  }


if(this.showChangePassword === true)
{
  if (this.user.password !== this.user.confirmPassword) {
    alert('Passwords do not match');
    return;
  }
}
  

  if (this.passwordError) {
    alert('Fix password error before submitting');
    return;
  }

  // this.http.post('http://localhost:8080/api/users/create', this.user).subscribe({
  // this.http.post(environment.apiBaseUrl+'/api/users/create', this.user).subscribe({



  const requestPayload: any = {
    id: this.user.userId,
    companyID: this.user.companyID,
    email: this.user.userEmail,
    userName: this.user.userName,
    designation: this.user.designation,
    phoneNumber: this.user.phoneNumber,
    currentPassword: this.currentPassword
  };

  // If Change Password is toggled
  if (this.showChangePassword) {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (this.passwordError) {
      alert('Fix password error before submitting');
      return;
    }

    requestPayload.newPassword = this.user.password;
  }


    // this.http.post(`${environment.apiBaseUrl}/api/users/create`, this.user, {
    this.http.post(`${environment.apiBaseUrl}/api/users/update/${this.user.userId}`, requestPayload, {
      headers: this.getDbHeaders()
    }).subscribe({
    next: (res) => {alert('User Updated')
      // this.user = {
      //   userName: '',
      //   designation: '',
      //   phoneCode: '',
      //   phoneNumber: '',
      //   password: '',
      //   confirmPassword: '',
      //   email: ''
      // };
      this.passwordError = '';
     },
    error: (err) => alert('Error: ' + err.message)
  });
}


}
