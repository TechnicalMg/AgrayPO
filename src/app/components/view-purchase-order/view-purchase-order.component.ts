import { Component ,OnInit} from '@angular/core';
import { PurchaseOrderService } from '../../services/purchase-order.service';
import { PurchaseOrderDto } from '../../models/purchase-order.dto';
import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, Observable } from 'rxjs';
import { PurchaseOrderView } from '../../models/purchase-order-view.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view-purchase-order',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
     CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  templateUrl: './view-purchase-order.component.html',
  styleUrl: './view-purchase-order.component.css'
})
export class ViewPurchaseOrderComponent implements OnInit{

  poNumbers: string[] = [];
  selectedPoNumber: string = '';
  poDetails: PurchaseOrderDto | null = null;
  searchQuery: string = '';
  
  searchOrganisationMinistry: string = ''; // New field for search
  filterForm!: FormGroup;


searchForm!: FormGroup;
  // filteredResults: PurchaseOrderView[] = [];


editMode: boolean = true;


  constructor(
    private poService: PurchaseOrderService,
    private fb: FormBuilder,
    private http: HttpClient
    // private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.loadPoNumbers();
    this.initFilterForm();
    this.onSearchChange();
    


// searching for from date and to date from search textfields from date and to date
 this.searchForm = this.fb.group({
      fromDate: [null],
      toDate: [null],
      model: [''],
      brand: [''],
      productName: ['']
    });

    this.searchForm.valueChanges.pipe(debounceTime(300)).subscribe(values => {
      this.poService
        .searchPurchaseOrders(
          values.model,
          values.brand,
          values.productName,
          values.fromDate,
          values.toDate
        )
        .subscribe(data => {
          this.purchaseOrders = data;
        });
    });
  }

  



  
  
  initFilterForm() {
    this.filterForm = this.fb.group({
      poNumber: [''],
      orgType: [''],
      orgMinistry: [''],
      orgName: [''],
      orgOfficeZone: [''],
      productName: [''],
      brand: [''],
      brandType: [''],
      catalogueStatus: [''],
      sellingAs: [''],
      catName: [''],
      model: [''],
      hsnCode: [''],
      orderQuantity: [''],
      unit: [''],
      unitPrice: [''],
      taxBifurcation: [''],
      finalPrice: [''],
  



      // Add other filter fields as needed
    });
  }

  loadPoNumbers() {
    this.poService.getAllPoNumbers().subscribe({
      next: (res) => this.poNumbers = res.data,
      error: (err) => console.error('Error loading PO numbers:', err)
    });
  }

  searchPo() {
    if (!this.selectedPoNumber) return;
    
    this.poService.getByPoNumber(this.selectedPoNumber).subscribe({
      next: (res) => this.poDetails = res.data,
      error: (err) => {
        console.error('Error fetching details:', err);
        this.poDetails = null;
      }
    });
  }

  searchByOrganisationMinistry() {
    if (!this.searchOrganisationMinistry) return;

    this.poService.getByOrganisationMinistry(this.searchOrganisationMinistry).subscribe({
      next: (res) => this.poDetails = res.data,
      error: (err) => {
        console.error('Error fetching details:', err);
        this.poDetails = null;
      }
    });
  }



  get filteredPoNumbers(): string[] {
    return this.poNumbers.filter(num => 
      num.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }






  purchaseOrders: any[] = [];
  selectedPO: any = null;
  loading: boolean = false;
  
  searchPO(): void {
    console.log("search button new one is clicked");
    this.loading = true;
    const filters = this.filterForm.value;


    // orignal old code
    // this.poService.searchPurchaseOrders(filters).subscribe({
    //   next: (data) => {
    //     this.purchaseOrders = data;
    //     this.loading = false;
    //     this.selectedPO = null;
    //   },
    //   error: (err) => {
    //     console.error('Search failed:', err);
    //     this.loading = false;
    //   }
    // });
  // orignal old code ends here 


     this.poService.getByPoNumber(this.selectedPoNumber).subscribe({
      next: (res) => {
        this.poDetails = res.data;
        // Make sure we're assigning an array to purchaseOrders
        this.purchaseOrders = Array.isArray(res.data) ? res.data : [res.data];
        this.loading = false;
        this.selectedPO = null;
      },
      error: (err) => {
        console.error('Error fetching details:', err);
        this.poDetails = null;
        this.loading = false;
      }
    });
  }







  viewDetails(po: any): void {
    this.selectedPO = po;
        this.selectedPoNumber=po.poNumber;
    console.log("selected po number",po.poNumber);

    this.searchPo() ;
  }





// searchByModel(model: string): Observable<PurchaseOrderView[]> {

//     return this.http.get<PurchaseOrderView[]>(`${environment.apiBaseUrl}/searchmodel?model=${model}`);
//   }



searchModel: string = '';
 onSearchChange(): void {
    this.poService.searchByModel(this.searchModel).subscribe(data => {
      this.purchaseOrders = data;
      console.log("purchase orders",this.purchaseOrders);
    });
  }


searchModelBrand: string = '';
 onSearchChangeBrand(): void {
    this.poService.searchByBrand(this.searchModelBrand).subscribe(data => {
      this.purchaseOrders = data;
      console.log("HI");
      console.log("purchase orders",this.purchaseOrders);
    });
  }



  searchProductName:string='';
  searchPoNumber:string='';
 
  todatee:string='';

  searchFromDate: Date | null = null;
searchToDate: Date | null = null;
  onSearchChangeProductname(): void{
    this.poService.searchByProductName(this.searchProductName).subscribe(data=>{
      this.purchaseOrders=data;
      console.log("purchase orders",this.purchaseOrders);
    })
  }

  
  onSearchChangeAll():void {
    console.log("searchmodel",this.searchModel);
    console.log("searchBrand",this.searchModelBrand);
    console.log("searchProductName",this.searchProductName);
    console.log("searchPoNumber",this.searchPoNumber);
    console.log("Fromdate",this.searchFromDate);
    console.log("Todate",this.searchToDate);
//  console.log("Fromdate", this.datePipe.transform(this.searchFromDate, 'dd-MM-yyyy'));
//   console.log("Todate", this.datePipe.transform(this.searchToDate, 'dd-MM-yyyy'));

console.log("Fromdate", this.formatDate(this.searchFromDate));
  console.log("Todate", this.formatDate(this.searchToDate));

const formattedFromDate = this.formatDate(this.searchFromDate);
  const formattedToDate = this.formatDate(this.searchToDate);


    this.poService.searchByAllFields(this.searchModel,this.searchModelBrand,this.searchProductName,this.searchPoNumber,formattedFromDate,formattedToDate).subscribe(data => {
      this.purchaseOrders = data;
      console.log("purchase orders",this.purchaseOrders);
    })  
    // this.poService.searchByAllFields(this.searchModel,this.searchModelBrand,this.searchProductName,this.searchPoNumber).subscribe(data => {
    //   this.purchaseOrders = data;
    //   console.log("purchase orders",this.purchaseOrders);
    // })  
  }

onDateChange(event: MatDatepickerInputEvent<Date>, field: 'from' | 'to') {
  const selectedDate = event.value;
  if (field === 'from') {
    this.searchFromDate = selectedDate;
  } else {
    this.searchToDate = selectedDate;
  }

  this.onSearchChangeAll(); // trigger search after setting value
}

formatDate(date: Date | null): string {
  if (!date) return '';
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

}
