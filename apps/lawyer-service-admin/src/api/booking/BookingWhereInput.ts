import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LawyerWhereUniqueInput } from "../lawyer/LawyerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BookingWhereInput = {
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  lawyer?: LawyerWhereUniqueInput;
  scheduledAt?: DateTimeNullableFilter;
  status?: "Option1";
};
