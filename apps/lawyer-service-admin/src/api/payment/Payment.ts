import { Client } from "../client/Client";
import { Lawyer } from "../lawyer/Lawyer";

export type Payment = {
  amount: number | null;
  client?: Client | null;
  createdAt: Date;
  id: string;
  lawyer?: Lawyer | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
