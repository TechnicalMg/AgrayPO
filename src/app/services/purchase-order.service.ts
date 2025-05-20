import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { PurchaseOrderDto } from '../models/purchase-order.dto';
import { environment } from '../../environments/environment';
import { PurchaseOrderView } from '../models/purchase-order-view.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  
private apiUrl =   environment.apiBaseUrl+'/api/purchase-order';

  constructor(private http: HttpClient) {}

  uploadPdf(file: File,poType:string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('poType', poType);
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  savePurchaseOrder(data: PurchaseOrderDto): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/save`, data);
  }

// Add these methods to your existing service
getAllPoNumbers(): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(`${this.apiUrl}/all-po-numbers`);
}

getByPoNumber(poNumber: string): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(
    `${this.apiUrl}/by-po-number/${poNumber}`
  );
}


//  searchPurchaseOrders(filters: any) {
//   console.log("filters", filters);
//     return this.http.post<any[]>(` ${this.apiUrl}/search` , filters);
//   }

getByOrganisationMinistry(ministry: string): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(
    `${this.apiUrl}/by-organisation-ministry/${ministry}`
  );
}


searchByModel(model: string): Observable<PurchaseOrderView[]> {
    return this.http.get<PurchaseOrderView[]>(`${this.apiUrl}/searchmodel?model=${model}`);
  }

searchByBrand(model: string): Observable<PurchaseOrderView[]> {
    // return this.http.get<PurchaseOrderView[]>(`${this.apiUrl}/searchbrand?model=${model}`);
    return this.http.get<PurchaseOrderView[]>(`${this.apiUrl}/searchbrand?brand=${model}`);
  }

searchByProductName(productName: string): Observable<PurchaseOrderView[]> {
    return this.http.get<PurchaseOrderView[]>(`${this.apiUrl}/searchproductname?productName=${productName}`);
  } 


searchByAll(model: string, brand: string, productName: string): Observable<PurchaseOrderView[]> {
  return this.http.get<PurchaseOrderView[]>(`${this.apiUrl}/searchAll?model=${model}&brand=${brand}&productName=${productName}`);
}

searchByAllFields(model: string, brand: string, productName: string, poNumber: string,fromDate:string,toDate:string): Observable<PurchaseOrderView[]> {
 
  console.log("from date",fromDate,"to date",toDate)
  return this.http.get<PurchaseOrderView[]>(`${this.apiUrl}/searchAllFields?model=${model}&brand=${brand}&productName=${productName}&poNumber=${poNumber}&fromDate=${fromDate}&toDate=${toDate}`);
    // &productName=${productName}&poNumber=${poNumber}`);
}

searchPurchaseOrders(
    model: string,
    brand: string,
    productName: string,
    fromDate: string,
    toDate: string
  ): Observable<any[]> {
    let params = new HttpParams()
      .set('model', model || '')
      .set('brand', brand || '')
      .set('productName', productName || '')
      .set('fromDate', fromDate || '')
      .set('toDate', toDate || '');

    return this.http.get<any[]>(`${this.apiUrl}/searchAll`, { params });
  }

  

}
