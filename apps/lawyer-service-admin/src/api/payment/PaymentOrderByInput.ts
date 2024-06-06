import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lawyerId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
