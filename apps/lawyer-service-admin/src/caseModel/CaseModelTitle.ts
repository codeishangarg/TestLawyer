import { CaseModel as TCaseModel } from "../api/caseModel/CaseModel";

export const CASEMODEL_TITLE_FIELD = "id";

export const CaseModelTitle = (record: TCaseModel): string => {
  return record.id?.toString() || String(record.id);
};
