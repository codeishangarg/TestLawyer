import { SupportTicket as TSupportTicket } from "../api/supportTicket/SupportTicket";

export const SUPPORTTICKET_TITLE_FIELD = "subject";

export const SupportTicketTitle = (record: TSupportTicket): string => {
  return record.subject?.toString() || String(record.id);
};
