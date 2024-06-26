/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { RazorpayPayment } from "./RazorpayPayment";
import { RazorpayPaymentCountArgs } from "./RazorpayPaymentCountArgs";
import { RazorpayPaymentFindManyArgs } from "./RazorpayPaymentFindManyArgs";
import { RazorpayPaymentFindUniqueArgs } from "./RazorpayPaymentFindUniqueArgs";
import { CreateRazorpayPaymentArgs } from "./CreateRazorpayPaymentArgs";
import { UpdateRazorpayPaymentArgs } from "./UpdateRazorpayPaymentArgs";
import { DeleteRazorpayPaymentArgs } from "./DeleteRazorpayPaymentArgs";
import { RazorpayPaymentService } from "../razorpayPayment.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RazorpayPayment)
export class RazorpayPaymentResolverBase {
  constructor(
    protected readonly service: RazorpayPaymentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "RazorpayPayment",
    action: "read",
    possession: "any",
  })
  async _razorpayPaymentsMeta(
    @graphql.Args() args: RazorpayPaymentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [RazorpayPayment])
  @nestAccessControl.UseRoles({
    resource: "RazorpayPayment",
    action: "read",
    possession: "any",
  })
  async razorpayPayments(
    @graphql.Args() args: RazorpayPaymentFindManyArgs
  ): Promise<RazorpayPayment[]> {
    return this.service.razorpayPayments(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => RazorpayPayment, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "RazorpayPayment",
    action: "read",
    possession: "own",
  })
  async razorpayPayment(
    @graphql.Args() args: RazorpayPaymentFindUniqueArgs
  ): Promise<RazorpayPayment | null> {
    const result = await this.service.razorpayPayment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RazorpayPayment)
  @nestAccessControl.UseRoles({
    resource: "RazorpayPayment",
    action: "create",
    possession: "any",
  })
  async createRazorpayPayment(
    @graphql.Args() args: CreateRazorpayPaymentArgs
  ): Promise<RazorpayPayment> {
    return await this.service.createRazorpayPayment({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RazorpayPayment)
  @nestAccessControl.UseRoles({
    resource: "RazorpayPayment",
    action: "update",
    possession: "any",
  })
  async updateRazorpayPayment(
    @graphql.Args() args: UpdateRazorpayPaymentArgs
  ): Promise<RazorpayPayment | null> {
    try {
      return await this.service.updateRazorpayPayment({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => RazorpayPayment)
  @nestAccessControl.UseRoles({
    resource: "RazorpayPayment",
    action: "delete",
    possession: "any",
  })
  async deleteRazorpayPayment(
    @graphql.Args() args: DeleteRazorpayPaymentArgs
  ): Promise<RazorpayPayment | null> {
    try {
      return await this.service.deleteRazorpayPayment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
