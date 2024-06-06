import { BookingUpdateManyWithoutClientsInput } from "./BookingUpdateManyWithoutClientsInput";
import { CaseModelUpdateManyWithoutClientsInput } from "./CaseModelUpdateManyWithoutClientsInput";
import { PaymentUpdateManyWithoutClientsInput } from "./PaymentUpdateManyWithoutClientsInput";
import { RatingUpdateManyWithoutClientsInput } from "./RatingUpdateManyWithoutClientsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClientUpdateInput = {
  bookings?: BookingUpdateManyWithoutClientsInput;
  cases?: CaseModelUpdateManyWithoutClientsInput;
  contactInformation?: string | null;
  payments?: PaymentUpdateManyWithoutClientsInput;
  ratings?: RatingUpdateManyWithoutClientsInput;
  user?: UserWhereUniqueInput | null;
};
