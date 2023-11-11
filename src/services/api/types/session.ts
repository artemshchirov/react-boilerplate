import { User } from "./user";

export interface Session {
  id: number;
  createdAt: Date;
  deletedAt: Date | null;
  userId: number | null;
  user: User | null;
}
