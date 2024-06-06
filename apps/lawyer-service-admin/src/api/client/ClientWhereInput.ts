import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { CaseModelListRelationFilter } from "../caseModel/CaseModelListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClientWhereInput = {
  bookings?: BookingListRelationFilter;
  cases?: CaseModelListRelationFilter;
  contactInformation?: StringNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  payments?: PaymentListRelationFilter;
  ratings?: RatingListRelationFilter;
  user?: UserWhereUniqueInput;
};
