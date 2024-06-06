export type RazorpayPayment = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  orderId: string | null;
  paymentId: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
