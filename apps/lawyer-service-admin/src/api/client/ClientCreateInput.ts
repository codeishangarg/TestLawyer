import { BookingCreateNestedManyWithoutClientsInput } from "./BookingCreateNestedManyWithoutClientsInput";
import { CaseModelCreateNestedManyWithoutClientsInput } from "./CaseModelCreateNestedManyWithoutClientsInput";
import { InvoiceCreateNestedManyWithoutClientsInput } from "./InvoiceCreateNestedManyWithoutClientsInput";
import { PaymentCreateNestedManyWithoutClientsInput } from "./PaymentCreateNestedManyWithoutClientsInput";
import { RatingCreateNestedManyWithoutClientsInput } from "./RatingCreateNestedManyWithoutClientsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClientCreateInput = {
  bookings?: BookingCreateNestedManyWithoutClientsInput;
  cases?: CaseModelCreateNestedManyWithoutClientsInput;
  contactInformation?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutClientsInput;
  payments?: PaymentCreateNestedManyWithoutClientsInput;
  ratings?: RatingCreateNestedManyWithoutClientsInput;
  user?: UserWhereUniqueInput | null;
};
