import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LawyerWhereUniqueInput } from "../lawyer/LawyerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RatingWhereInput = {
  client?: ClientWhereUniqueInput;
  comments?: StringNullableFilter;
  id?: StringFilter;
  lawyer?: LawyerWhereUniqueInput;
  rating?: FloatNullableFilter;
};
