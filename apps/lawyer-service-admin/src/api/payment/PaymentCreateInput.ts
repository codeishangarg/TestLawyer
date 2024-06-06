import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { LawyerWhereUniqueInput } from "../lawyer/LawyerWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  client?: ClientWhereUniqueInput | null;
  lawyer?: LawyerWhereUniqueInput | null;
  status?: "Option1" | null;
};
