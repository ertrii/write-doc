import { PageMetadata } from "../types/metadata-page";

export default function group(
  groupName: string,
  routes: Record<string, PageMetadata>
) {
  return {
    name: groupName,
    routes,
  };
}
