import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RazorpayPaymentResolverBase } from "./base/razorpayPayment.resolver.base";
import { RazorpayPayment } from "./base/RazorpayPayment";
import { RazorpayPaymentService } from "./razorpayPayment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RazorpayPayment)
export class RazorpayPaymentResolver extends RazorpayPaymentResolverBase {
  constructor(
    protected readonly service: RazorpayPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
