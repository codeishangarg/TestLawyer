import { SortOrder } from "../../util/SortOrder";

export type RazorpayPaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  paymentId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
