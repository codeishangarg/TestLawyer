import { BookingUpdateManyWithoutClientsInput } from "./BookingUpdateManyWithoutClientsInput";
import { CaseModelUpdateManyWithoutClientsInput } from "./CaseModelUpdateManyWithoutClientsInput";
import { InvoiceUpdateManyWithoutClientsInput } from "./InvoiceUpdateManyWithoutClientsInput";
import { PaymentUpdateManyWithoutClientsInput } from "./PaymentUpdateManyWithoutClientsInput";
import { RatingUpdateManyWithoutClientsInput } from "./RatingUpdateManyWithoutClientsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClientUpdateInput = {
  bookings?: BookingUpdateManyWithoutClientsInput;
  cases?: CaseModelUpdateManyWithoutClientsInput;
  contactInformation?: string | null;
  invoices?: InvoiceUpdateManyWithoutClientsInput;
  payments?: PaymentUpdateManyWithoutClientsInput;
  ratings?: RatingUpdateManyWithoutClientsInput;
  user?: UserWhereUniqueInput | null;
};
