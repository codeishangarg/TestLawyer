import { Client } from "../client/Client";
import { Lawyer } from "../lawyer/Lawyer";

export type Invoice = {
  amount: number | null;
  caseReference: string | null;
  client?: Client | null;
  createdAt: Date;
  gst: number | null;
  id: string;
  lawyer?: Lawyer | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
