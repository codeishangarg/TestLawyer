import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  clientId?: SortOrder;
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lawyerId?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
