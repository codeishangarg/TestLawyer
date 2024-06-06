export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  receiver: string | null;
  sender: string | null;
  updatedAt: Date;
};
