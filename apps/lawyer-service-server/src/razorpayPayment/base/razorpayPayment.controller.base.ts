/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RazorpayPaymentService } from "../razorpayPayment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RazorpayPaymentCreateInput } from "./RazorpayPaymentCreateInput";
import { RazorpayPayment } from "./RazorpayPayment";
import { RazorpayPaymentFindManyArgs } from "./RazorpayPaymentFindManyArgs";
import { RazorpayPaymentWhereUniqueInput } from "./RazorpayPaymentWhereUniqueInput";
import { RazorpayPaymentUpdateInput } from "./RazorpayPaymentUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RazorpayPaymentControllerBase {
  constructor(
    protected readonly service: RazorpayPaymentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RazorpayPayment })
  @nestAccessControl.UseRoles({
    resource: "RazorpayPayment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: RazorpayPaymentCreateInput,
  })
  async createRazorpayPayment(
    @common.Body() data: RazorpayPaymentCreateInput
  ): Promise<RazorpayPayment> {
    return await this.service.createRazorpayPayment({
      data: data,
      select: {
        amount: true,
        createdAt: true,
        currency: true,
        id: true,
        orderId: true,
        paymentId: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [RazorpayPayment] })
  @ApiNestedQuery(RazorpayPaymentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RazorpayPayment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async razorpayPayments(
    @common.Req() request: Request
  ): Promise<RazorpayPayment[]> {
    const args = plainToClass(RazorpayPaymentFindManyArgs, request.query);
    return this.service.razorpayPayments({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        currency: true,
        id: true,
        orderId: true,
        paymentId: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RazorpayPayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RazorpayPayment",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async razorpayPayment(
    @common.Param() params: RazorpayPaymentWhereUniqueInput
  ): Promise<RazorpayPayment | null> {
    const result = await this.service.razorpayPayment({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        currency: true,
        id: true,
        orderId: true,
        paymentId: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RazorpayPayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RazorpayPayment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: RazorpayPaymentUpdateInput,
  })
  async updateRazorpayPayment(
    @common.Param() params: RazorpayPaymentWhereUniqueInput,
    @common.Body() data: RazorpayPaymentUpdateInput
  ): Promise<RazorpayPayment | null> {
    try {
      return await this.service.updateRazorpayPayment({
        where: params,
        data: data,
        select: {
          amount: true,
          createdAt: true,
          currency: true,
          id: true,
          orderId: true,
          paymentId: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: RazorpayPayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RazorpayPayment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRazorpayPayment(
    @common.Param() params: RazorpayPaymentWhereUniqueInput
  ): Promise<RazorpayPayment | null> {
    try {
      return await this.service.deleteRazorpayPayment({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          currency: true,
          id: true,
          orderId: true,
          paymentId: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
