import { BookingUpdateManyWithoutLawyersInput } from "./BookingUpdateManyWithoutLawyersInput";
import { CaseModelUpdateManyWithoutLawyersInput } from "./CaseModelUpdateManyWithoutLawyersInput";
import { PaymentUpdateManyWithoutLawyersInput } from "./PaymentUpdateManyWithoutLawyersInput";
import { RatingUpdateManyWithoutLawyersInput } from "./RatingUpdateManyWithoutLawyersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LawyerUpdateInput = {
  bookings?: BookingUpdateManyWithoutLawyersInput;
  cases?: CaseModelUpdateManyWithoutLawyersInput;
  location?: string | null;
  payments?: PaymentUpdateManyWithoutLawyersInput;
  rating?: number | null;
  ratings?: RatingUpdateManyWithoutLawyersInput;
  specialties?: Array<"Option1">;
  user?: UserWhereUniqueInput | null;
};
