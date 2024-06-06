import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { CaseModelListRelationFilter } from "../caseModel/CaseModelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LawyerWhereInput = {
  bookings?: BookingListRelationFilter;
  cases?: CaseModelListRelationFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  location?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  rating?: FloatNullableFilter;
  ratings?: RatingListRelationFilter;
  user?: UserWhereUniqueInput;
};
