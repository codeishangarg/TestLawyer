import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RazorpayPaymentWhereInput = {
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  orderId?: StringNullableFilter;
  paymentId?: StringNullableFilter;
  status?: "Option1";
};
