import { RazorpayPayment as TRazorpayPayment } from "../api/razorpayPayment/RazorpayPayment";

export const RAZORPAYPAYMENT_TITLE_FIELD = "currency";

export const RazorpayPaymentTitle = (record: TRazorpayPayment): string => {
  return record.currency?.toString() || String(record.id);
};
