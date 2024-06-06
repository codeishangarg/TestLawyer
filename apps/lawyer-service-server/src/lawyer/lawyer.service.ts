import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LawyerServiceBase } from "./base/lawyer.service.base";

@Injectable()
export class LawyerService extends LawyerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
