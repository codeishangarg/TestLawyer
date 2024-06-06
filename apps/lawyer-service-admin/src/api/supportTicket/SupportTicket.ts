import { User } from "../user/User";

export type SupportTicket = {
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  subject: string | null;
  updatedAt: Date;
  user?: User | null;
};
