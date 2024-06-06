import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LawyerListRelationFilter } from "../lawyer/LawyerListRelationFilter";
import { SupportTicketListRelationFilter } from "../supportTicket/SupportTicketListRelationFilter";

export type UserWhereInput = {
  clients?: ClientListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastLogin?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  lawyers?: LawyerListRelationFilter;
  resetToken?: StringNullableFilter;
  supportTickets?: SupportTicketListRelationFilter;
  username?: StringFilter;
};
