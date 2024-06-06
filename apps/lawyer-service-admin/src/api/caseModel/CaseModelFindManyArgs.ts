import { CaseModelWhereInput } from "./CaseModelWhereInput";
import { CaseModelOrderByInput } from "./CaseModelOrderByInput";

export type CaseModelFindManyArgs = {
  where?: CaseModelWhereInput;
  orderBy?: Array<CaseModelOrderByInput>;
  skip?: number;
  take?: number;
};
