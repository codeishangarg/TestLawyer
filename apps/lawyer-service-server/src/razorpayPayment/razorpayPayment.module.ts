import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RazorpayPaymentModuleBase } from "./base/razorpayPayment.module.base";
import { RazorpayPaymentService } from "./razorpayPayment.service";
import { RazorpayPaymentController } from "./razorpayPayment.controller";
import { RazorpayPaymentResolver } from "./razorpayPayment.resolver";

@Module({
  imports: [RazorpayPaymentModuleBase, forwardRef(() => AuthModule)],
  controllers: [RazorpayPaymentController],
  providers: [RazorpayPaymentService, RazorpayPaymentResolver],
  exports: [RazorpayPaymentService],
})
export class RazorpayPaymentModule {}
