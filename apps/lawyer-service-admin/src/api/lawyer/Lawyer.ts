import { Booking } from "../booking/Booking";
import { CaseModel } from "../caseModel/CaseModel";
import { Invoice } from "../invoice/Invoice";
import { Payment } from "../payment/Payment";
import { Rating } from "../rating/Rating";
import { User } from "../user/User";

export type Lawyer = {
  bookings?: Array<Booking>;
  cases?: Array<CaseModel>;
  createdAt: Date;
  id: string;
  invoices?: Array<Invoice>;
  location: string | null;
  payments?: Array<Payment>;
  rating: number | null;
  ratings?: Array<Rating>;
  specialties?: Array<"Option1">;
  updatedAt: Date;
  user?: User | null;
};
