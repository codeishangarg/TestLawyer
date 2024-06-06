import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CaseModelModuleBase } from "./base/caseModel.module.base";
import { CaseModelService } from "./caseModel.service";
import { CaseModelController } from "./caseModel.controller";
import { CaseModelResolver } from "./caseModel.resolver";

@Module({
  imports: [CaseModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [CaseModelController],
  providers: [CaseModelService, CaseModelResolver],
  exports: [CaseModelService],
})
export class CaseModelModule {}
