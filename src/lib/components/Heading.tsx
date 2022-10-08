import { ReactNode } from "react";

export interface HeadingProps {
  children: ReactNode;
  type?: "heading-1" | "heading-2" | "heading-3";
}

export function Heading({ children, type = "heading-1" }: HeadingProps) {
  if (type === "heading-1") {
    return <h2 className="heading">{children}</h2>;
  }

  if (type === "heading-2") {
    return <h3 className="heading">{children}</h3>;
  }

  return <h4 className="heading">{children}</h4>;
}
