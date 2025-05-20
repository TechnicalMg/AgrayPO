import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-po-generation',
  imports: [FormsModule,CommonModule,ReactiveFormsModule, MatFormFieldModule,
    MatSelectModule],
  templateUrl: './po-generation.component.html',
  styleUrl: './po-generation.component.css'
})
export class PoGenerationComponent {


  // Predefined dropdown values
  gemPoNumbers: string[] = ['GEM/2024/B/0001', 'GEM/2024/B/0002', 'GEM/2024/B/0003'];

  allItemsAndModels: { [key: string]: { item: string, model: string }[] } = {
    'GEM/2024/B/0001': [
      { item: 'Printer', model: 'HP LaserJet 1020' },
      { item: 'Scanner', model: 'Canon Lide 300' }
    ],
    'GEM/2024/B/0002': [
      { item: 'Laptop', model: 'Dell Vostro 3400' },
      { item: 'Monitor', model: 'LG 24MP88' }
    ],
    'GEM/2024/B/0003': [
      { item: 'Router', model: 'TP-Link AX50' }
    ]
  };

  itemsAndModels: { item: string, model: string }[] = [];
  distributors: string[] = ['TechDistributors Pvt Ltd', 'Smart Supplies Ltd'];
  oems: string[] = ['HP', 'Dell', 'Canon', 'TP-Link'];

  // Reactive form data (with index signature for dynamic fields)
  form: {
    selectedGemPo: string;
    selectedItem: string;
    selectedModel: string;
    selectedDistributor: string;
    selectedOem: string;
    selectedDate: string;
    createdBy: string;
    [key: string]: string;
  } = {
    selectedGemPo: '',
    selectedItem: '',
    selectedModel: '',
    selectedDistributor: '',
    selectedOem: '',
    selectedDate: '',
    createdBy: ''
  };

  // Custom column management
  customColumns: string[] = [];
  customColumnInput: string = '';

  // Submitted entries to display in the table
  submittedEntries: Array<any> = [];

  // Triggered when GEM PO is selected
  onGemPoChange(): void {
    this.itemsAndModels = this.allItemsAndModels[this.form.selectedGemPo] || [];
    this.form.selectedItem = '';
    this.form.selectedModel = '';
  }

  // Add dynamic custom column
  addCustomColumn(): void {
    const column = this.customColumnInput.trim();
    if (column && !this.customColumns.includes(column)) {
      this.customColumns.push(column);
    }
    this.customColumnInput = '';
  }

  // Remove a custom column
  removeCustomColumn(column: string): void {
    this.customColumns = this.customColumns.filter(c => c !== column);
    delete this.form[column];
  }

  // Form submission
  submit(): void {
    if (!this.form.selectedGemPo || !this.form.selectedItem || !this.form.selectedModel || !this.form.selectedDistributor || !this.form.selectedOem || !this.form.selectedDate || !this.form.createdBy) {
      alert('Please fill all required fields.');
      return;
    }

    const entry: any = {
      ...this.form,
      timestamp: new Date().toLocaleString()
    };

    this.customColumns.forEach(col => {
      entry[col] = this.form[col] || '';
    });

    this.submittedEntries.unshift(entry);
    this.resetForm();
  }

  // Reset the form after submission
  private resetForm(): void {
    this.form = {
      selectedGemPo: '',
      selectedItem: '',
      selectedModel: '',
      selectedDistributor: '',
      selectedOem: '',
      selectedDate: '',
      createdBy: ''
    };
    this.itemsAndModels = [];
    this.customColumns.forEach(col => {
      this.form[col] = '';
    });
  }
}
