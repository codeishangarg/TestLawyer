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
import { Rating } from "./Rating";
import { RatingCountArgs } from "./RatingCountArgs";
import { RatingFindManyArgs } from "./RatingFindManyArgs";
import { RatingFindUniqueArgs } from "./RatingFindUniqueArgs";
import { CreateRatingArgs } from "./CreateRatingArgs";
import { UpdateRatingArgs } from "./UpdateRatingArgs";
import { DeleteRatingArgs } from "./DeleteRatingArgs";
import { Client } from "../../client/base/Client";
import { Lawyer } from "../../lawyer/base/Lawyer";
import { RatingService } from "../rating.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Rating)
export class RatingResolverBase {
  constructor(
    protected readonly service: RatingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async _ratingsMeta(
    @graphql.Args() args: RatingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Rating])
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async ratings(@graphql.Args() args: RatingFindManyArgs): Promise<Rating[]> {
    return this.service.ratings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Rating, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "own",
  })
  async rating(
    @graphql.Args() args: RatingFindUniqueArgs
  ): Promise<Rating | null> {
    const result = await this.service.rating(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Rating)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "create",
    possession: "any",
  })
  async createRating(@graphql.Args() args: CreateRatingArgs): Promise<Rating> {
    return await this.service.createRating({
      ...args,
      data: {
        ...args.data,

        client: args.data.client
          ? {
              connect: args.data.client,
            }
          : undefined,

        lawyer: args.data.lawyer
          ? {
              connect: args.data.lawyer,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Rating)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "update",
    possession: "any",
  })
  async updateRating(
    @graphql.Args() args: UpdateRatingArgs
  ): Promise<Rating | null> {
    try {
      return await this.service.updateRating({
        ...args,
        data: {
          ...args.data,

          client: args.data.client
            ? {
                connect: args.data.client,
              }
            : undefined,

          lawyer: args.data.lawyer
            ? {
                connect: args.data.lawyer,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Rating)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "delete",
    possession: "any",
  })
  async deleteRating(
    @graphql.Args() args: DeleteRatingArgs
  ): Promise<Rating | null> {
    try {
      return await this.service.deleteRating(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Client, {
    nullable: true,
    name: "client",
  })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "any",
  })
  async getClient(@graphql.Parent() parent: Rating): Promise<Client | null> {
    const result = await this.service.getClient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Lawyer, {
    nullable: true,
    name: "lawyer",
  })
  @nestAccessControl.UseRoles({
    resource: "Lawyer",
    action: "read",
    possession: "any",
  })
  async getLawyer(@graphql.Parent() parent: Rating): Promise<Lawyer | null> {
    const result = await this.service.getLawyer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}