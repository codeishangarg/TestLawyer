import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { LawyerWhereUniqueInput } from "../lawyer/LawyerWhereUniqueInput";

export type RatingUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  comments?: string | null;
  lawyer?: LawyerWhereUniqueInput | null;
  rating?: number | null;
};
