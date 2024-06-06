import { Client } from "../client/Client";
import { Lawyer } from "../lawyer/Lawyer";

export type Booking = {
  client?: Client | null;
  createdAt: Date;
  id: string;
  lawyer?: Lawyer | null;
  scheduledAt: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
