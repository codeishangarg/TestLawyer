import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LawyerService } from "./lawyer.service";
import { LawyerControllerBase } from "./base/lawyer.controller.base";

@swagger.ApiTags("lawyers")
@common.Controller("lawyers")
export class LawyerController extends LawyerControllerBase {
  constructor(
    protected readonly service: LawyerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
