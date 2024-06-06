import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  contactInformation?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
