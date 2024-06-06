import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  receiver?: StringNullableFilter;
  sender?: StringNullableFilter;
};
