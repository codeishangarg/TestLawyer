import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lawyerId?: SortOrder;
  scheduledAt?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
