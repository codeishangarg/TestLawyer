import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LawyerWhereUniqueInput } from "../lawyer/LawyerWhereUniqueInput";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  caseReference?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  gst?: FloatNullableFilter;
  id?: StringFilter;
  lawyer?: LawyerWhereUniqueInput;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
};
