import { ClientUpdateManyWithoutUsersInput } from "./ClientUpdateManyWithoutUsersInput";
import { LawyerUpdateManyWithoutUsersInput } from "./LawyerUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SupportTicketUpdateManyWithoutUsersInput } from "./SupportTicketUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  clients?: ClientUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastLogin?: Date | null;
  lastName?: string | null;
  lawyers?: LawyerUpdateManyWithoutUsersInput;
  password?: string;
  resetToken?: string | null;
  roles?: InputJsonValue;
  supportTickets?: SupportTicketUpdateManyWithoutUsersInput;
  username?: string;
};
