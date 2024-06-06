import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LawyerWhereUniqueInput } from "../lawyer/LawyerWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  lawyer?: LawyerWhereUniqueInput;
  status?: "Option1";
};
