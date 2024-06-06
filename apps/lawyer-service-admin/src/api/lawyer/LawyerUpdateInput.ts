import { BookingUpdateManyWithoutLawyersInput } from "./BookingUpdateManyWithoutLawyersInput";
import { CaseModelUpdateManyWithoutLawyersInput } from "./CaseModelUpdateManyWithoutLawyersInput";
import { InvoiceUpdateManyWithoutLawyersInput } from "./InvoiceUpdateManyWithoutLawyersInput";
import { PaymentUpdateManyWithoutLawyersInput } from "./PaymentUpdateManyWithoutLawyersInput";
import { RatingUpdateManyWithoutLawyersInput } from "./RatingUpdateManyWithoutLawyersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LawyerUpdateInput = {
  bookings?: BookingUpdateManyWithoutLawyersInput;
  cases?: CaseModelUpdateManyWithoutLawyersInput;
  invoices?: InvoiceUpdateManyWithoutLawyersInput;
  location?: string | null;
  payments?: PaymentUpdateManyWithoutLawyersInput;
  rating?: number | null;
  ratings?: RatingUpdateManyWithoutLawyersInput;
  specialties?: Array<"Option1">;
  user?: UserWhereUniqueInput | null;
};
