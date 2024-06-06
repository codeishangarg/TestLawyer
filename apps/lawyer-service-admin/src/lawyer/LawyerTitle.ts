import { Lawyer as TLawyer } from "../api/lawyer/Lawyer";

export const LAWYER_TITLE_FIELD = "location";

export const LawyerTitle = (record: TLawyer): string => {
  return record.location?.toString() || String(record.id);
};
