import { ClientCreateNestedManyWithoutUsersInput } from "./ClientCreateNestedManyWithoutUsersInput";
import { LawyerCreateNestedManyWithoutUsersInput } from "./LawyerCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SupportTicketCreateNestedManyWithoutUsersInput } from "./SupportTicketCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  clients?: ClientCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastLogin?: Date | null;
  lastName?: string | null;
  lawyers?: LawyerCreateNestedManyWithoutUsersInput;
  password: string;
  resetToken?: string | null;
  roles: InputJsonValue;
  supportTickets?: SupportTicketCreateNestedManyWithoutUsersInput;
  username: string;
};
