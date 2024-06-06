import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CaseModelServiceBase } from "./base/caseModel.service.base";

@Injectable()
export class CaseModelService extends CaseModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
