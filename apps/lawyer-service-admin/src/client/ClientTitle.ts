import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "contactInformation";

export const ClientTitle = (record: TClient): string => {
  return record.contactInformation?.toString() || String(record.id);
};
