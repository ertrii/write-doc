import { createContext, ReactNode } from "react";

interface PageProviderProps {
  children: ReactNode;
  title: string;
}

interface PageContextInterface {
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
