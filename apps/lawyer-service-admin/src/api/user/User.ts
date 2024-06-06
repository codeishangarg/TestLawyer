import { Client } from "../client/Client";
import { Lawyer } from "../lawyer/Lawyer";
import { JsonValue } from "type-fest";

export type User = {
  clients?: Array<Client>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastLogin: Date | null;
  lastName: string | null;
  lawyers?: Array<Lawyer>;
  resetToken: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
