import { Collection } from './collection';
import { Project } from './project';

export interface Still {
  id: number;
  projectId: number;
  name: string;
  order: number;
  blurUrl?: string;
  url: string;
  dominantColors: string[];
  colorTemperature: number | null;
  createdAt: Date;
  updatedAt: Date;
  width: number;
  height: number;
  dominantColor?: string;
  project?: Project;
  collections?: Collection[];
  tags?: string[];
}
