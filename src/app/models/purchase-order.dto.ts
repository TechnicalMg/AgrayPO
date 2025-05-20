export interface ProductDetail {
   productName: string;
  brand: string;
  brandType: string;
  catalogueStatus: string;
  sellingAs: string;
  model: string;
  hsnCode: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  tax: number;
  totalPrice: number;
  categoryNameQaudrant: string;
    // Add any other properties that might be needed for product details
}


export interface AmcDetails {
   description: string;
  quantity: string;
  uniPrice: string;
  serviceStartDate: string;
  serviceEndDate: string;
  
    // Add any other properties that might be needed for product details
}

export interface ConsigneeDetails {
   consigneeDetails: string;
  item: string;
  lotNo: string;
  quantity: string;
  deliveryStartDate: string;
  deliveryEndDate: string;
  
    // Add any other properties that might be needed for product details
}
export class PurchaseOrderDto {
    // HEADER
    poNumber: string = '';
    poDate: string='';
    bidNumber: string = '';
  
    // GEM DETAILS
    organisationType: string = '';
    organisationMinistry: string = '';
    organisationDepartment: string = '';
    organisationName: string = '';
  
    // BUYER DETAILS
    buyerDesg: string = '';
    buyerContact: string = '';
    buyerEmail: string = '';
    buyerGstin: string = '';
    buyerAddress: string = '';
  
    // FINANCIAL APPROVAL
    ifdConcurrence: string = '';
    desgAdminApproval: string = '';
    desgFinalApproval: string = '';
  
    // PAYING AUTHORITY
    payingRole: string = '';
    payingMode: string = '';
    payingDesg: string = '';
    payingEmail: string = '';
    payingGstin: string = '';
    payingAddress: string = '';
  
    // MSME/MSE DETAILS
    miiStatus: string = '';
    msmeVerified: string = '';
    msmeRegistrationNumber: string = '';
    mseSocialCategory: string = '';
    mseGender: string = '';
    mseGstin: string = '';

// RFP & BID
    rfpNo: string = '';
    rfpDate: Date = new Date();
    rfpFileUploadPath: string = '';

    bidNo: string = '';
    bidDate: Date = new Date();
    bidFileUploadPath: string = '';

    productDetails: ProductDetail[] = [];
    consigneeDetails: ConsigneeDetails[] = [];
  }