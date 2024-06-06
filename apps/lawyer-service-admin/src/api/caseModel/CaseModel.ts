import { Client } from "../client/Client";
import { Lawyer } from "../lawyer/Lawyer";

export type CaseModel = {
  client?: Client | null;
  createdAt: Date;
  description: string | null;
  id: string;
  lawyer?: Lawyer | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
