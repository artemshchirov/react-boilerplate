import { Privacy } from "./enums";
import { Still } from "./still";
import { User } from "./user";

enum ProjectType {
  SHORT_FILM = "Short Film",
  FEATURE_FILM = "Feature Film",
  DOCUMENTARY = "Documentary",
  MUSIC_VIDEO = "Music Video",
  SERIES = "Series",
}

export interface Project {
  id: number;
  path: string;
  ownerId: number;
  owner?: User;
  title: string;
  director: string;
  description: string;
  cinematographer: string;
  colorist: string;
  productionDesigner?: string | null;
  projectType: ProjectType;
  privacy: Privacy;
  year: number;
  order: number;
  isVisible: boolean;
  camera?: string | null;
  videoUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
  thumbnail: Still;
  stills: Still[];
}
