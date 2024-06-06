import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RazorpayPaymentServiceBase } from "./base/razorpayPayment.service.base";

@Injectable()
export class RazorpayPaymentService extends RazorpayPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
