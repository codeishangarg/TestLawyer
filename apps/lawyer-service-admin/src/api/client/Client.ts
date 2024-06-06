import { Booking } from "../booking/Booking";
import { CaseModel } from "../caseModel/CaseModel";
import { Invoice } from "../invoice/Invoice";
import { Payment } from "../payment/Payment";
import { Rating } from "../rating/Rating";
import { User } from "../user/User";

export type Client = {
  bookings?: Array<Booking>;
  cases?: Array<CaseModel>;
  contactInformation: string | null;
  createdAt: Date;
  id: string;
  invoices?: Array<Invoice>;
  payments?: Array<Payment>;
  ratings?: Array<Rating>;
  updatedAt: Date;
  user?: User | null;
};
