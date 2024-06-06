import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LawyerModuleBase } from "./base/lawyer.module.base";
import { LawyerService } from "./lawyer.service";
import { LawyerController } from "./lawyer.controller";
import { LawyerResolver } from "./lawyer.resolver";

@Module({
  imports: [LawyerModuleBase, forwardRef(() => AuthModule)],
  controllers: [LawyerController],
  providers: [LawyerService, LawyerResolver],
  exports: [LawyerService],
})
export class LawyerModule {}
