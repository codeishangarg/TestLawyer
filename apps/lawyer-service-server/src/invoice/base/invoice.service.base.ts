/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Invoice as PrismaInvoice,
  Client as PrismaClient,
  Lawyer as PrismaLawyer,
} from "@prisma/client";

export class InvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.InvoiceCountArgs, "select">): Promise<number> {
    return this.prisma.invoice.count(args);
  }

  async invoices<T extends Prisma.InvoiceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceFindManyArgs>
  ): Promise<PrismaInvoice[]> {
    return this.prisma.invoice.findMany<Prisma.InvoiceFindManyArgs>(args);
  }
  async invoice<T extends Prisma.InvoiceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceFindUniqueArgs>
  ): Promise<PrismaInvoice | null> {
    return this.prisma.invoice.findUnique(args);
  }
  async createInvoice<T extends Prisma.InvoiceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceCreateArgs>
  ): Promise<PrismaInvoice> {
    return this.prisma.invoice.create<T>(args);
  }
  async updateInvoice<T extends Prisma.InvoiceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceUpdateArgs>
  ): Promise<PrismaInvoice> {
    return this.prisma.invoice.update<T>(args);
  }
  async deleteInvoice<T extends Prisma.InvoiceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceDeleteArgs>
  ): Promise<PrismaInvoice> {
    return this.prisma.invoice.delete(args);
  }

  async getClient(parentId: string): Promise<PrismaClient | null> {
    return this.prisma.invoice
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }

  async getLawyer(parentId: string): Promise<PrismaLawyer | null> {
    return this.prisma.invoice
      .findUnique({
        where: { id: parentId },
      })
      .lawyer();
  }
}
