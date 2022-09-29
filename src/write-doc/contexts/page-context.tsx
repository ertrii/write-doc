import { createContext, ReactNode } from "react";

export interface PageProviderProps {
  children: ReactNode;
  title: string;
}

export interface PageContextInterface {
  title: string;
}

const PageContext = createContext<PageContextInterface>({
  title: "",
});

export function PageProvider({ children, title }: PageProviderProps) {
  return (
    <PageContext.Provider value={{ title }}>{children}</PageContext.Provider>
  );
}

export default PageContext;
