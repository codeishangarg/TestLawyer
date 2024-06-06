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
  Lawyer as PrismaLawyer,
  Booking as PrismaBooking,
  CaseModel as PrismaCaseModel,
  Invoice as PrismaInvoice,
  Payment as PrismaPayment,
  Rating as PrismaRating,
  User as PrismaUser,
} from "@prisma/client";

export class LawyerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LawyerCountArgs, "select">): Promise<number> {
    return this.prisma.lawyer.count(args);
  }

  async lawyers<T extends Prisma.LawyerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LawyerFindManyArgs>
  ): Promise<PrismaLawyer[]> {
    return this.prisma.lawyer.findMany<Prisma.LawyerFindManyArgs>(args);
  }
  async lawyer<T extends Prisma.LawyerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LawyerFindUniqueArgs>
  ): Promise<PrismaLawyer | null> {
    return this.prisma.lawyer.findUnique(args);
  }
  async createLawyer<T extends Prisma.LawyerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LawyerCreateArgs>
  ): Promise<PrismaLawyer> {
    return this.prisma.lawyer.create<T>(args);
  }
  async updateLawyer<T extends Prisma.LawyerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LawyerUpdateArgs>
  ): Promise<PrismaLawyer> {
    return this.prisma.lawyer.update<T>(args);
  }
  async deleteLawyer<T extends Prisma.LawyerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LawyerDeleteArgs>
  ): Promise<PrismaLawyer> {
    return this.prisma.lawyer.delete(args);
  }

  async findBookings(
    parentId: string,
    args: Prisma.BookingFindManyArgs
  ): Promise<PrismaBooking[]> {
    return this.prisma.lawyer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bookings(args);
  }

  async findCases(
    parentId: string,
    args: Prisma.CaseModelFindManyArgs
  ): Promise<PrismaCaseModel[]> {
    return this.prisma.lawyer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .cases(args);
  }

  async findInvoices(
    parentId: string,
    args: Prisma.InvoiceFindManyArgs
  ): Promise<PrismaInvoice[]> {
    return this.prisma.lawyer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .invoices(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<PrismaPayment[]> {
    return this.prisma.lawyer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }

  async findRatings(
    parentId: string,
    args: Prisma.RatingFindManyArgs
  ): Promise<PrismaRating[]> {
    return this.prisma.lawyer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ratings(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.lawyer
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
