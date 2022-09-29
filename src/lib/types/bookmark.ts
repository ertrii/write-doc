import { Group } from "./group";

export interface Bookmark {
  name: string;
  path: string;
  groups: Group[];
}
