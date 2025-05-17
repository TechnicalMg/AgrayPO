import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CompanyManagementService } from '../../services/company-management.service';
import { CountryCodeService } from '../../services/country-code.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // if you use snackbar
import { Observable } from 'rxjs';

// Interface for location data
// interface LocationData {
interface StateDistrict  {
  state: string;
  districts: string[];
  Corporatestate: string;
  Corporatedistricts:string[];
 
}


@Component({
  selector: 'app-company-management',
  imports: [CommonModule,FormsModule, ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './company-management.component.html',
  styleUrl: './company-management.component.css'
})


export class CompanyManagementComponent implements OnInit {
  
  locationData: StateDistrict[] = [];

  // new csss transitions
  currentSection: number = 0;
  logoPreviewUrl: string | ArrayBuffer | null = null;



  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => this.logoPreviewUrl = reader.result;
      reader.readAsDataURL(file);
      this.selectedFile = file;
      // Optionally save file to this.company.logo
    }
  }


  // new csss transitions ends here


  countries = [
    { code: '+91', name: 'India' },
    { code: '+1', name: 'United States' },
    // ... other countries from backend API
  ];

      companyForm: FormGroup;
      states: string[] = [];
      districts: string[] = [];

      Corporatestates: string[] = [];
      Corporatedistricts: string[] = [];

      selectedState = '';
      selectedDistrict = '';
      logoPreview: string | ArrayBuffer | null = null;
      selectedFile: File | null = null;
      imageError: string = '';


      constructor(private fb: FormBuilder,
         private companyService: CompanyManagementService ,
         private stateService: CountryCodeService,
         private route: ActivatedRoute,
         private snackBar: MatSnackBar,
         private http: HttpClient ) {
        this.companyForm = this.fb.group({
          companyName: ['', Validators.required],
          registeredOfficeAdd1:[''],
          registeredOfficeAdd2:[''],
          registeredOfficeCountryCode:[''],
          registeredOfficeCountryName:[''],
          registeredOfficeState:[''],
          registeredOfficeDistrict:[''],
          registeredOfficePincode:[''],
          // registeredOfficePhone:[''],
          registeredOfficePhone: [
            '',
            [
              Validators.required,
              Validators.pattern(/^[0-9]{10}$/)
            ]
          ],
         



          corporateOfficeAdd1:[''],
          corporateOfficeAdd2:[''],
          corporateOfficeCountryCode:[''],
          corporateOfficeCountryName:[''],
          corporateOfficeState:[''],
          corporateOfficeDistrict:[''],
          corporateOfficePincode:[''],
          corporateOfficePhone:[''],

          email: ['', [Validators.required, Validators.email]],
          // corporateOffice: [''],
          panNumber: ['', [
            Validators.required,

            Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
            // Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
          ]],
          gstin: [
            '',
            [
              Validators.required,
              Validators.pattern(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/)
            ]
          ],
          // pan: [''],
          gemId: [''],
          etenderId: [''],
          logo: [null]
        });
      }



      companyId: number | null = null;
      isEditMode = false;
    

ngOnInit() {
  
  
  this.getLocationData().subscribe(data => {
    
    this.locationData=data;


    this.states = data.map(item => item.state); // This will extract an array of state names
    this.Corporatestates = data.map(item => item.state); // This will extract an array of state names
    console.log("Extracted states:", this.states);
  });

  this.companyForm.get('registeredOfficeState')?.valueChanges.subscribe(selectedState => {
    const selected = this.locationData.find(item => item.state === selectedState);
    this.districts = selected ? selected.districts : [];
    this.companyForm.get('registeredOfficeDistrict')?.setValue('');
  });

  this.companyForm.get('corporateOfficeState')?.valueChanges.subscribe(selectedState => {
    const selected = this.locationData.find(item => item.state === selectedState);
    this.Corporatedistricts = selected ? selected.districts : [];
    this.companyForm.get('corporateOfficeDistrict')?.setValue('');
  });
  

  this.route.paramMap.subscribe(params => {
    const idParam = params.get('id');
    if (idParam) {
      this.companyId = +idParam;
      this.isEditMode = true;
      this.loadCompany(this.companyId);
    }
  });


}


// loadCompany1(id:number): void {
//   this.companyService.getCompanyById(id).subscribe({
//     next: (company: Company) => {
//       this.company = company;

//       // 👇 This sets the base64 image to show in your <img> tag
//       if (this.company.logo) {
//         this.logoPreview = 'data:image/png;base64,' + this.company.logo;
//       }
//     },
//     error: (err) => {
//       console.error('Error loading company:', err);
//     }
//   });
// }


loadCompany(id:number): void {
  this.companyService.getCompanyById(id).subscribe({
    next: (res: any) => {
      this.companyForm.patchValue({
        companyName: res.companyName,

        registeredOfficeAdd1: res.registeredOfficeAdd1,
        registeredOfficeAdd2: res.registeredOfficeAdd2,
        registeredOfficeCountryCode: res.registeredOfficeCountryCode,
        registeredOfficeCountryName: res.registeredOfficeCountryName,
        registeredOfficeState: res.registeredOfficeState,
        registeredOfficeDistrict: res.registeredOfficeDistrict,
        registeredOfficePincode: res.registeredOfficePincode,
        registeredOfficePhone: res.registeredOfficePhone,

        corporateOfficeAdd1: res.corporateOfficeAdd1,
        corporateOfficeAdd2: res.corporateOfficeAdd2,
        corporateOfficeCountryCode: res.corporateOfficeCountryCode,
        corporateOfficeCountryName: res.corporateOfficeCountryName,
        corporateOfficeState: res.corporateOfficeState,
        corporateOfficeDistrict: res.corporateOfficeDistrict,
        corporateOfficePincode: res.corporateOfficePincode,
        corporateOfficePhone: res.corporateOfficePhone,

        email: res.email,
        panNumber: res.panNumber,
        gstin: res.gstin,
        gemId: res.gemId,
        etenderId: res.etenderId,
        logo: res.logo   // ⚠️ This doesn't affect image preview, just form control
      });

      // 👇 THIS is what actually makes the image appear
      if (res.logo) {
        this.logoPreview = 'data:image/png;base64,' + res.logo;
      }
    },
    error: (err) => {
      console.error('Error loading company:', err);
    }
  });
}



loadCompany1(id: number): void {
  this.companyService.getCompanyById(id).subscribe(
    (company) => {
      console.log("logo data",company.logo);
      const base64String = this.arrayBufferToBase64(company.logo);
        this.logoPreview = 'data:image/png;base64,' + base64String;
      
      this.companyForm.patchValue({


        companyName: company.companyName,

        registeredOfficeAdd1: company.registeredOfficeAdd1,
        registeredOfficeAdd2: company.registeredOfficeAdd2,
        registeredOfficeCountryCode: company.registeredOfficeCountryCode,
        registeredOfficeCountryName: company.registeredOfficeCountryName,
        registeredOfficeState: company.registeredOfficeState,
        registeredOfficeDistrict: company.registeredOfficeDistrict,
        registeredOfficePincode: company.registeredOfficePincode,
        registeredOfficePhone: company.registeredOfficePhone,

        corporateOfficeAdd1: company.corporateOfficeAdd1,
        corporateOfficeAdd2: company.corporateOfficeAdd2,
        corporateOfficeCountryCode: company.corporateOfficeCountryCode,
        corporateOfficeCountryName: company.corporateOfficeCountryName,
        corporateOfficeState: company.corporateOfficeState,
        corporateOfficeDistrict: company.corporateOfficeDistrict,
        corporateOfficePincode: company.corporateOfficePincode,
        corporateOfficePhone: company.corporateOfficePhone,

        email: company.email,
        panNumber: company.panNumber,
        gstin: company.gstin,
        gemId: company.gemId,
        etenderId: company.etenderId,
        logo: 'data:image/png;base64,' + base64String
        
      });

      this.logoPreview ='data:image/png;base64,' + base64String;
      // if (company.logo) {
      //   // Convert byte array to base64 string
      //   const base64String = this.arrayBufferToBase64(company.logo);
      //   this.logoPreview = 'data:image/png;base64,' + base64String;
      //   // this.logoPreview = 'data:image/png;base64,' + this.company.logo;
      // }
        
      // });
    },
    (error) => {
      console.error('Error loading company', error);
    }
  );
  
}


// 👇 Helper method
arrayBufferToBase64(buffer: any): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}




getLocationData(): Observable<StateDistrict[]> {
  // console.log(this.http.get('/location-data.json'));
  return this.http.get<StateDistrict[]>('assets/location-data.json');

}


toUppercase(controlName: string) {
  const control = this.companyForm.get(controlName);
  if (control) {
    control.setValue(control.value?.toUpperCase(), { emitEvent: false });
  }
}


      // countries features
      onCountryCodeChange(type: 'reg' | 'corp', event: any) {
        const code = event.target.value;
        const country = this.countries.find(c => c.code === code);
        if (country) {
          this.companyForm.patchValue({
            [`${type}CountryName`]: country.name
          });
        }
      }
      
      onCountryNameChange(type: 'reg' | 'corp', event: any) {
        const name = event.target.value;
        const country = this.countries.find(c => c.name === name);
        if (country) {
          this.companyForm.patchValue({
            [`${type}CountryCode`]: country.code
          });
        }
      }




      onLogoSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
          this.validateImage(file, event);  // 🔥 call validateImage()
        }
      }

      // validator function
  validateImage(file: File, event: any) {
    // const maxSizeInMB = 1; // 1 MB
    const maxSizeInKB = 500; // 1 MB
    const maxWidth = 200;  // 200px width
    const maxHeight = 200; // 200px height

    // Check file size
    // const fileSizeInMB = file.size / (1024 * 1024);
    const fileSizeInKB = file.size / (1024);
    // if (fileSizeInMB > maxSizeInMB) {
    if (fileSizeInKB > maxSizeInKB) {
      // this.imageError = `Image size should be less than ${maxSizeInMB} MB.`;
      this.imageError = `Image size should be less than ${maxSizeInKB} KB.`;
      this.companyForm.get('logo')?.reset();
      event.target.value = '';
      return;
    }

    // Check dimensions
    const img = new Image();
// added new line here
const objectUrl = URL.createObjectURL(file);

    // img.src = URL.createObjectURL(file);
    // new code

    img.src = objectUrl;

    img.onload = () => {
      const width = img.width;
      const height = img.height;

      // if (width !== maxWidth || height !== maxHeight) {
      if (width > maxWidth || height > maxHeight) {
        // this.imageError = `Image must be exactly ${maxWidth}x${maxHeight} pixels.`;
        this.imageError = `Image must be max ${maxWidth}x${maxHeight} pixels.`;
        this.companyForm.get('logo')?.reset();
        event.target.value = '';
        this.logoPreview = '';
      } else {
        
        
        this.imageError = '';
        // previous by deafult image shown here
        // this.logoPreview = img.src; // optional preview

        this.companyForm.get('logo')?.setValue(file); // set file to formControl
        this.selectedFile = file; //  long data 111111111111111111111111111111111111111111111111111111
        // Read file as base64 string for preview
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.logoPreview = e.target.result; // base64 string
        };
        reader.readAsDataURL(file);
      }

      // before code
      // URL.revokeObjectURL(img.src); // release memory

      URL.revokeObjectURL(objectUrl); // release memory
    };

    img.onerror = () => {
      this.imageError = 'Invalid image file.';
      this.companyForm.get('logo')?.reset();
      event.target.value = '';
      this.logoPreview = '';
    };
  }


    
      removeLogo(): void {
        this.logoPreview = null;
        this.selectedFile = null;
        const input = document.getElementById('logo-upload') as HTMLInputElement;
        if (input) input.value = '';
      }
    
      onSubmit(): void {

        // Log the raw form value
  console.log('Form Raw Value:', this.companyForm.value);
  console.log('Selected file:', this.selectedFile);
  // Log a cleaned version (for nested objects)
  console.log('Form JSON:', JSON.stringify(this.companyForm.value, null, 2));

        // if (this.companyForm.valid) {
        if (this.companyForm) {
          const formData = new FormData();
          formData.append('companyName', this.companyForm.get('companyName')?.value);
          formData.append('registeredOfficeAdd1', this.companyForm.get('registeredOfficeAdd1')?.value);
          formData.append('registeredOfficeAdd2', this.companyForm.get('registeredOfficeAdd2')?.value);
          
          // formData.append('registeredOfficeCountryCode', this.companyForm.get('registeredOfficeCountryCode')?.value);
          formData.append('registeredOfficeCountryCode', "+91");
          
          formData.append('registeredOfficeCountryName', this.companyForm.get('registeredOfficeCountryName')?.value);
          formData.append('registeredOfficeState', this.companyForm.get('registeredOfficeState')?.value);
          formData.append('registeredOfficeDistrict', this.companyForm.get('registeredOfficeDistrict')?.value);
          formData.append('registeredOfficePincode', this.companyForm.get('registeredOfficePincode')?.value);
          formData.append('registeredOfficePhone', this.companyForm.get('registeredOfficePhone')?.value);


          // formData.append('registeredOffice', this.companyForm.get('registeredOffice')?.value);
          formData.append('corporateOfficeAdd1', this.companyForm.get('corporateOfficeAdd1')?.value);
          formData.append('corporateOfficeAdd2', this.companyForm.get('corporateOfficeAdd2')?.value);
          
          // formData.append('corporateOfficeCountryCode', this.companyForm.get('corporateOfficeCountryCode')?.value);
          formData.append('corporateOfficeCountryCode', "+91");
          
          formData.append('corporateOfficeCountryName', this.companyForm.get('corporateOfficeCountryName')?.value);
          formData.append('corporateOfficeState', this.companyForm.get('corporateOfficeState')?.value);
          formData.append('corporateOfficeDistrict', this.companyForm.get('corporateOfficeDistrict')?.value);
          formData.append('corporateOfficePincode', this.companyForm.get('corporateOfficePincode')?.value);
          formData.append('corporateOfficePhone', this.companyForm.get('corporateOfficePhone')?.value);




          formData.append('email', this.companyForm.get('email')?.value);
          formData.append('gstin', this.companyForm.get('gstin')?.value);
          formData.append('panNumber', this.companyForm.get('panNumber')?.value);
          formData.append('gemId', this.companyForm.get('gemId')?.value);
          formData.append('etenderId', this.companyForm.get('etenderId')?.value);
    
          if (this.selectedFile) {
            formData.append('logo', this.selectedFile);
          }
          this.companyService.createCompany(formData).subscribe({

            next: (res) =>{
              this.snackBar.open('Company saved successfully!', 'Close', { duration: 3000 })
              //  alert('Company saved successfully!')
              this.companyForm.reset(); 
            },
            error: (err) => {
              console.error('Save Error:', err);
              this.snackBar.open(err.error, 'Close', { duration: 5000 }); // show exact backend error
              // alert('Failed to save company.');
            }  });
          }
        
        }
      

      confirmBeforeSave() {
        const shouldReview = confirm("Review the data of this form?\nPress OK to Review, or Cancel to Save.");
      
        if (shouldReview) {
          // ✅ Do nothing – let the user review the form
          return;
        } else {
          // ❌ User doesn't want to review, proceed to save
          this.onSubmit(); // Your existing save logic
        }
      }



  }

