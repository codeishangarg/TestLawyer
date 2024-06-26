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
import { CaseModelService } from "../caseModel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CaseModelCreateInput } from "./CaseModelCreateInput";
import { CaseModel } from "./CaseModel";
import { CaseModelFindManyArgs } from "./CaseModelFindManyArgs";
import { CaseModelWhereUniqueInput } from "./CaseModelWhereUniqueInput";
import { CaseModelUpdateInput } from "./CaseModelUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CaseModelControllerBase {
  constructor(
    protected readonly service: CaseModelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CaseModel })
  @nestAccessControl.UseRoles({
    resource: "CaseModel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CaseModelCreateInput,
  })
  async createCaseModel(
    @common.Body() data: CaseModelCreateInput
  ): Promise<CaseModel> {
    return await this.service.createCaseModel({
      data: {
        ...data,

        client: data.client
          ? {
              connect: data.client,
            }
          : undefined,

        lawyer: data.lawyer
          ? {
              connect: data.lawyer,
            }
          : undefined,
      },
      select: {
        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,

        lawyer: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CaseModel] })
  @ApiNestedQuery(CaseModelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CaseModel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async caseModels(@common.Req() request: Request): Promise<CaseModel[]> {
    const args = plainToClass(CaseModelFindManyArgs, request.query);
    return this.service.caseModels({
      ...args,
      select: {
        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,

        lawyer: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CaseModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CaseModel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async caseModel(
    @common.Param() params: CaseModelWhereUniqueInput
  ): Promise<CaseModel | null> {
    const result = await this.service.caseModel({
      where: params,
      select: {
        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,

        lawyer: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: CaseModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CaseModel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CaseModelUpdateInput,
  })
  async updateCaseModel(
    @common.Param() params: CaseModelWhereUniqueInput,
    @common.Body() data: CaseModelUpdateInput
  ): Promise<CaseModel | null> {
    try {
      return await this.service.updateCaseModel({
        where: params,
        data: {
          ...data,

          client: data.client
            ? {
                connect: data.client,
              }
            : undefined,

          lawyer: data.lawyer
            ? {
                connect: data.lawyer,
              }
            : undefined,
        },
        select: {
          client: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,

          lawyer: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: CaseModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CaseModel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCaseModel(
    @common.Param() params: CaseModelWhereUniqueInput
  ): Promise<CaseModel | null> {
    try {
      return await this.service.deleteCaseModel({
        where: params,
        select: {
          client: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,

          lawyer: {
            select: {
              id: true,
            },
          },

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
