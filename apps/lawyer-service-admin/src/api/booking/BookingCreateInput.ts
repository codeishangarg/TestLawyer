import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { LawyerWhereUniqueInput } from "../lawyer/LawyerWhereUniqueInput";

export type BookingCreateInput = {
  client?: ClientWhereUniqueInput | null;
  lawyer?: LawyerWhereUniqueInput | null;
  scheduledAt?: Date | null;
  status?: "Option1" | null;
};
