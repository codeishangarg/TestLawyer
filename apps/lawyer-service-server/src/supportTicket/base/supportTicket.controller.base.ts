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
import { SupportTicketService } from "../supportTicket.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SupportTicketCreateInput } from "./SupportTicketCreateInput";
import { SupportTicket } from "./SupportTicket";
import { SupportTicketFindManyArgs } from "./SupportTicketFindManyArgs";
import { SupportTicketWhereUniqueInput } from "./SupportTicketWhereUniqueInput";
import { SupportTicketUpdateInput } from "./SupportTicketUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SupportTicketControllerBase {
  constructor(
    protected readonly service: SupportTicketService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SupportTicket })
  @nestAccessControl.UseRoles({
    resource: "SupportTicket",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SupportTicketCreateInput,
  })
  async createSupportTicket(
    @common.Body() data: SupportTicketCreateInput
  ): Promise<SupportTicket> {
    return await this.service.createSupportTicket({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,
        status: true,
        subject: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SupportTicket] })
  @ApiNestedQuery(SupportTicketFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SupportTicket",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async supportTickets(
    @common.Req() request: Request
  ): Promise<SupportTicket[]> {
    const args = plainToClass(SupportTicketFindManyArgs, request.query);
    return this.service.supportTickets({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        status: true,
        subject: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SupportTicket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SupportTicket",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async supportTicket(
    @common.Param() params: SupportTicketWhereUniqueInput
  ): Promise<SupportTicket | null> {
    const result = await this.service.supportTicket({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        status: true,
        subject: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: SupportTicket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SupportTicket",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SupportTicketUpdateInput,
  })
  async updateSupportTicket(
    @common.Param() params: SupportTicketWhereUniqueInput,
    @common.Body() data: SupportTicketUpdateInput
  ): Promise<SupportTicket | null> {
    try {
      return await this.service.updateSupportTicket({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,
          status: true,
          subject: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: SupportTicket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SupportTicket",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSupportTicket(
    @common.Param() params: SupportTicketWhereUniqueInput
  ): Promise<SupportTicket | null> {
    try {
      return await this.service.deleteSupportTicket({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          status: true,
          subject: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
