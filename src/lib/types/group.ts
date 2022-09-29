import { PageMetadata } from "./metadata-page";

export interface Group {
  name: string;
  routes: Record<string, PageMetadata>;
}
