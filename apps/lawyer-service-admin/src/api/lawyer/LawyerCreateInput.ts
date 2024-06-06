import { BookingCreateNestedManyWithoutLawyersInput } from "./BookingCreateNestedManyWithoutLawyersInput";
import { CaseModelCreateNestedManyWithoutLawyersInput } from "./CaseModelCreateNestedManyWithoutLawyersInput";
import { PaymentCreateNestedManyWithoutLawyersInput } from "./PaymentCreateNestedManyWithoutLawyersInput";
import { RatingCreateNestedManyWithoutLawyersInput } from "./RatingCreateNestedManyWithoutLawyersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LawyerCreateInput = {
  bookings?: BookingCreateNestedManyWithoutLawyersInput;
  cases?: CaseModelCreateNestedManyWithoutLawyersInput;
  location?: string | null;
  payments?: PaymentCreateNestedManyWithoutLawyersInput;
  rating?: number | null;
  ratings?: RatingCreateNestedManyWithoutLawyersInput;
  specialties?: Array<"Option1">;
  user?: UserWhereUniqueInput | null;
};
