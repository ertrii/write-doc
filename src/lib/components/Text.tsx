import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
}

export function Text({ children }: TextProps) {
  return <p className="text">{children}</p>;
}
