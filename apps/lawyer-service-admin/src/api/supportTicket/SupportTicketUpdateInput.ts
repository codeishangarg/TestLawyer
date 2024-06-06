import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SupportTicketUpdateInput = {
  description?: string | null;
  status?: "Option1" | null;
  subject?: string | null;
  user?: UserWhereUniqueInput | null;
};
