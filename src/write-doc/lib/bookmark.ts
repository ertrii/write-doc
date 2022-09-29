import { Bookmark } from "../types/bookmark";

export default function bookmark(
  name: string,
  path: string,
  groups: any[]
): Bookmark {
  return {
    name,
    path,
    groups,
  };
}
