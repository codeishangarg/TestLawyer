import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RazorpayPaymentService } from "./razorpayPayment.service";
import { RazorpayPaymentControllerBase } from "./base/razorpayPayment.controller.base";

@swagger.ApiTags("razorpayPayments")
@common.Controller("razorpayPayments")
export class RazorpayPaymentController extends RazorpayPaymentControllerBase {
  constructor(
    protected readonly service: RazorpayPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
