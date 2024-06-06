import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LawyerListRelationFilter } from "../lawyer/LawyerListRelationFilter";

export type UserWhereInput = {
  clients?: ClientListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastLogin?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  lawyers?: LawyerListRelationFilter;
  resetToken?: StringNullableFilter;
  username?: StringFilter;
};
