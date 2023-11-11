import { Collection } from "./collection";
import { FileEntity } from "./file-entity";
import { Project } from "./project";
import { Role } from "./role";
import { Session } from "./session";

export enum UserProviderEnum {
  EMAIL = "email",
  GOOGLE = "google",
}

enum StatusType {
  ACTIVE,
  INACTIVE,
  DELETED,
  BANNED,
}

// NOTE: check and delete
export type OldUser = {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  photo?: FileEntity;
  // provider?: UserProviderEnum;  // WARN: is this field connected and synced with backend?
  // socialId?: string;
  role?: Role;
};

export interface User {
  id: number;
  username: string;
  name: string;
  role: string;
  provider?: UserProviderEnum;
  isAvailableForHire: boolean;
  isVerified: boolean;
  avatarUrl: string;
  avatarBlurUrl: string;
  emailUpdates: boolean;
  projects?: Project[] | null;
  email: string;
  contactEmail?: string | null;
  bio?: string | null;
  location?: string | null;
  instagramUrl?: string | null;
  twitterUrl?: string | null;
  vimeoUrl?: string | null;
  imdbUrl?: string | null;
  websiteUrl?: string | null;
  facebookUrl?: string | null;
  isAvailable?: boolean | null;
  favoriteColor: string;
  status: StatusType;
  plan: PlanType | null;
  collections?: Collection[] | null;
  sessions?: Session[] | null; // NOTE: Do i need this here?
}
