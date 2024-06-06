import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { LawyerWhereUniqueInput } from "../lawyer/LawyerWhereUniqueInput";

export type InvoiceUpdateInput = {
  amount?: number | null;
  caseReference?: string | null;
  client?: ClientWhereUniqueInput | null;
  gst?: number | null;
  lawyer?: LawyerWhereUniqueInput | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
