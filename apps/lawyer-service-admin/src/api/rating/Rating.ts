import { Client } from "../client/Client";
import { Lawyer } from "../lawyer/Lawyer";

export type Rating = {
  client?: Client | null;
  comments: string | null;
  createdAt: Date;
  id: string;
  lawyer?: Lawyer | null;
  rating: number | null;
  updatedAt: Date;
};
