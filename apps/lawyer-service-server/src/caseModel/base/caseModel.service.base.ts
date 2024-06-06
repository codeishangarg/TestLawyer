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
  CaseModel as PrismaCaseModel,
  Client as PrismaClient,
  Lawyer as PrismaLawyer,
} from "@prisma/client";

export class CaseModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CaseModelCountArgs, "select">
  ): Promise<number> {
    return this.prisma.caseModel.count(args);
  }

  async caseModels<T extends Prisma.CaseModelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CaseModelFindManyArgs>
  ): Promise<PrismaCaseModel[]> {
    return this.prisma.caseModel.findMany<Prisma.CaseModelFindManyArgs>(args);
  }
  async caseModel<T extends Prisma.CaseModelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CaseModelFindUniqueArgs>
  ): Promise<PrismaCaseModel | null> {
    return this.prisma.caseModel.findUnique(args);
  }
  async createCaseModel<T extends Prisma.CaseModelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CaseModelCreateArgs>
  ): Promise<PrismaCaseModel> {
    return this.prisma.caseModel.create<T>(args);
  }
  async updateCaseModel<T extends Prisma.CaseModelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CaseModelUpdateArgs>
  ): Promise<PrismaCaseModel> {
    return this.prisma.caseModel.update<T>(args);
  }
  async deleteCaseModel<T extends Prisma.CaseModelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CaseModelDeleteArgs>
  ): Promise<PrismaCaseModel> {
    return this.prisma.caseModel.delete(args);
  }

  async getClient(parentId: string): Promise<PrismaClient | null> {
    return this.prisma.caseModel
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }

  async getLawyer(parentId: string): Promise<PrismaLawyer | null> {
    return this.prisma.caseModel
      .findUnique({
        where: { id: parentId },
      })
      .lawyer();
  }
}