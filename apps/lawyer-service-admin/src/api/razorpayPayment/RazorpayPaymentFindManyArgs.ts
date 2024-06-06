import { RazorpayPaymentWhereInput } from "./RazorpayPaymentWhereInput";
import { RazorpayPaymentOrderByInput } from "./RazorpayPaymentOrderByInput";

export type RazorpayPaymentFindManyArgs = {
  where?: RazorpayPaymentWhereInput;
  orderBy?: Array<RazorpayPaymentOrderByInput>;
  skip?: number;
  take?: number;
};
