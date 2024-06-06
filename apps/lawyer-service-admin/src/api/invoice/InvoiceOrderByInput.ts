import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  amount?: SortOrder;
  caseReference?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  gst?: SortOrder;
  id?: SortOrder;
  lawyerId?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
