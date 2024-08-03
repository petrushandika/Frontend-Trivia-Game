export interface CreateInvoiceDto {
  transaction_details: {
    orderId: string;
    grossAmount: number;
  };
  itemDetails: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
}
