import { Component,OnInit } from '@angular/core';
import { CompanyManagementService } from '../../../services/company-management.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-company-management',
  imports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule


  ],
  templateUrl: './view-company-management.component.html',
  styleUrl: './view-company-management.component.css'
})
export class ViewCompanyManagementComponent implements OnInit   {
  companies: any[] = [];
  displayedColumns: string[] = [
    'id', 'companyName', 'registeredOffice', 'corporateOffice',
    'gstin', 'pan', 'gemId', 'eTenderId', 'logo'
  ];

  constructor(private companyService: CompanyManagementService) {}

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe(data => {
      this.companies = data;
    });
  }
}
