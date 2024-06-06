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
import { Invoice } from "./Invoice";
import { InvoiceCountArgs } from "./InvoiceCountArgs";
import { InvoiceFindManyArgs } from "./InvoiceFindManyArgs";
import { InvoiceFindUniqueArgs } from "./InvoiceFindUniqueArgs";
import { CreateInvoiceArgs } from "./CreateInvoiceArgs";
import { UpdateInvoiceArgs } from "./UpdateInvoiceArgs";
import { DeleteInvoiceArgs } from "./DeleteInvoiceArgs";
import { Client } from "../../client/base/Client";
import { Lawyer } from "../../lawyer/base/Lawyer";
import { InvoiceService } from "../invoice.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Invoice)
export class InvoiceResolverBase {
  constructor(
    protected readonly service: InvoiceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "read",
    possession: "any",
  })
  async _invoicesMeta(
    @graphql.Args() args: InvoiceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Invoice])
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "read",
    possession: "any",
  })
  async invoices(
    @graphql.Args() args: InvoiceFindManyArgs
  ): Promise<Invoice[]> {
    return this.service.invoices(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Invoice, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "read",
    possession: "own",
  })
  async invoice(
    @graphql.Args() args: InvoiceFindUniqueArgs
  ): Promise<Invoice | null> {
    const result = await this.service.invoice(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Invoice)
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "create",
    possession: "any",
  })
  async createInvoice(
    @graphql.Args() args: CreateInvoiceArgs
  ): Promise<Invoice> {
    return await this.service.createInvoice({
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
  @graphql.Mutation(() => Invoice)
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "update",
    possession: "any",
  })
  async updateInvoice(
    @graphql.Args() args: UpdateInvoiceArgs
  ): Promise<Invoice | null> {
    try {
      return await this.service.updateInvoice({
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

  @graphql.Mutation(() => Invoice)
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "delete",
    possession: "any",
  })
  async deleteInvoice(
    @graphql.Args() args: DeleteInvoiceArgs
  ): Promise<Invoice | null> {
    try {
      return await this.service.deleteInvoice(args);
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
  async getClient(@graphql.Parent() parent: Invoice): Promise<Client | null> {
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
  async getLawyer(@graphql.Parent() parent: Invoice): Promise<Lawyer | null> {
    const result = await this.service.getLawyer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
