export interface Welcome {
  items: Item[];
}

export interface Item {
  invoiceId:       number;
  invoiceNumber:   string;
  invoiceCurrency: string;
  paymentCurrency: string;
  invoiceAmount:   number;
  invoiceDate:     Date;
  businessUnit:    string;
  supplier:        string;
  supplierSite:    string;
  links:           Link[];
}

export interface Link {
  rel:         string;
  href:        string;
  name:        string;
  kind:        string;
  properties?: Properties;
}

export interface Properties {
  changeIndicator: string;
}
