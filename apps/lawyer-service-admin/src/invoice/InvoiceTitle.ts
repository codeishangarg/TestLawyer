import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "caseReference";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.caseReference?.toString() || String(record.id);
};
