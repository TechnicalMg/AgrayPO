export class PurchaseOrderDto {
    // HEADER
    poNumber: string = '';
    poDate: Date = new Date();
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
}
