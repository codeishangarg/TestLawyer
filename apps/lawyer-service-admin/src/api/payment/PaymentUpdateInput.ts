import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { LawyerWhereUniqueInput } from "../lawyer/LawyerWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  client?: ClientWhereUniqueInput | null;
  lawyer?: LawyerWhereUniqueInput | null;
  status?: "Option1" | null;
};
