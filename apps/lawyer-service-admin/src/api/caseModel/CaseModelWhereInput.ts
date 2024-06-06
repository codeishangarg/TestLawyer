import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LawyerWhereUniqueInput } from "../lawyer/LawyerWhereUniqueInput";

export type CaseModelWhereInput = {
  client?: ClientWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  lawyer?: LawyerWhereUniqueInput;
  status?: "Option1";
};
