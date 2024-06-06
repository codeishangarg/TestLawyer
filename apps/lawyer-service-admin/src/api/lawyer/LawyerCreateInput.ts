import { BookingCreateNestedManyWithoutLawyersInput } from "./BookingCreateNestedManyWithoutLawyersInput";
import { CaseModelCreateNestedManyWithoutLawyersInput } from "./CaseModelCreateNestedManyWithoutLawyersInput";
import { InvoiceCreateNestedManyWithoutLawyersInput } from "./InvoiceCreateNestedManyWithoutLawyersInput";
import { PaymentCreateNestedManyWithoutLawyersInput } from "./PaymentCreateNestedManyWithoutLawyersInput";
import { RatingCreateNestedManyWithoutLawyersInput } from "./RatingCreateNestedManyWithoutLawyersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LawyerCreateInput = {
  bookings?: BookingCreateNestedManyWithoutLawyersInput;
  cases?: CaseModelCreateNestedManyWithoutLawyersInput;
  invoices?: InvoiceCreateNestedManyWithoutLawyersInput;
  location?: string | null;
  payments?: PaymentCreateNestedManyWithoutLawyersInput;
  rating?: number | null;
  ratings?: RatingCreateNestedManyWithoutLawyersInput;
  specialties?: Array<"Option1">;
  user?: UserWhereUniqueInput | null;
};
