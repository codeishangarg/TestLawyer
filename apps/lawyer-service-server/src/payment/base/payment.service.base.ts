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
  Payment as PrismaPayment,
  Client as PrismaClient,
  Lawyer as PrismaLawyer,
} from "@prisma/client";

export class PaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PaymentCountArgs, "select">): Promise<number> {
    return this.prisma.payment.count(args);
  }

  async payments<T extends Prisma.PaymentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentFindManyArgs>
  ): Promise<PrismaPayment[]> {
    return this.prisma.payment.findMany<Prisma.PaymentFindManyArgs>(args);
  }
  async payment<T extends Prisma.PaymentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentFindUniqueArgs>
  ): Promise<PrismaPayment | null> {
    return this.prisma.payment.findUnique(args);
  }
  async createPayment<T extends Prisma.PaymentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentCreateArgs>
  ): Promise<PrismaPayment> {
    return this.prisma.payment.create<T>(args);
  }
  async updatePayment<T extends Prisma.PaymentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentUpdateArgs>
  ): Promise<PrismaPayment> {
    return this.prisma.payment.update<T>(args);
  }
  async deletePayment<T extends Prisma.PaymentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentDeleteArgs>
  ): Promise<PrismaPayment> {
    return this.prisma.payment.delete(args);
  }

  async getClient(parentId: string): Promise<PrismaClient | null> {
    return this.prisma.payment
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }

  async getLawyer(parentId: string): Promise<PrismaLawyer | null> {
    return this.prisma.payment
      .findUnique({
        where: { id: parentId },
      })
      .lawyer();
  }
}
