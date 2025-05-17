// purchase-order-search.model.ts
export interface PurchaseOrderSearchRequest {
  poNumber?: string;
  orderType?: string;
  orderDateFrom?: string;
  orderDateTo?: string;
  invoiceNumber?: string;
  consigneeName?: string;
  itemName?: string;
  itemBrand?: string;
  itemModel?: string;
  itemDescription?: string;
}
