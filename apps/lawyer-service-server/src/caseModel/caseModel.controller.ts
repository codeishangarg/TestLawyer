import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CaseModelService } from "./caseModel.service";
import { CaseModelControllerBase } from "./base/caseModel.controller.base";

@swagger.ApiTags("caseModels")
@common.Controller("caseModels")
export class CaseModelController extends CaseModelControllerBase {
  constructor(
    protected readonly service: CaseModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
