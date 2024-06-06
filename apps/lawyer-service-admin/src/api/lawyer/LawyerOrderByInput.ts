import { SortOrder } from "../../util/SortOrder";

export type LawyerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  rating?: SortOrder;
  specialties?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
