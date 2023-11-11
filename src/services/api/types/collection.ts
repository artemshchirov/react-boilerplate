import { Privacy } from "./enums";
import { Still } from "./still";
import { User } from "./user";

export interface Collection {
  id: number;
  ownerId: number;
  title: string;
  path: string;
  description: string;
  privacy: Privacy;
  order: number;
  isVisible: boolean;
  owner: User;
  collaborators: User[];
  thumbnail: Still;
  createdAt: Date;
  updatedAt: Date;
  stills: Still[];
}
