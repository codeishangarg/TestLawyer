import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SupportTicketWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  subject?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
