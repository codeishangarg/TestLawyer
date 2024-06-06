import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { LawyerWhereUniqueInput } from "../lawyer/LawyerWhereUniqueInput";

export type CaseModelUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  description?: string | null;
  lawyer?: LawyerWhereUniqueInput | null;
  status?: "Option1" | null;
};
