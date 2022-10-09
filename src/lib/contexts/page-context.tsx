import { createContext, ReactNode, useRef } from "react";
import useBookmark from "../hooks/useBookmark";

export interface DataHeading {
  text: string;
  href: string;
  subHeadings: Omit<DataHeading, "subHeadings">[];
}

export interface PageContextInterface {
  title: string;
  setHeading: (text: string) => void;
  setSubHeading: (text: string) => void;
  getHeadings: () => DataHeading[];
  clear: () => void;
  bookName: string;
  notebookName: string;
  formatTextHref: (text: string) => string;
}

type RefDataHeading = Record<
  string,
  Omit<DataHeading, "subHeadings"> & {
    subHeadings: Record<string, Omit<DataHeading, "subHeadings">>;
  }
>;

export interface PageProviderProps {
  children: ReactNode;
  title: string;
  notebookName: string;
}

const PageContext = createContext<PageContextInterface>({
  title: "",
  setHeading: () => null,
  setSubHeading: () => null,
  getHeadings: () => [],
  clear: () => null,
  bookName: "",
  notebookName: "",
  formatTextHref: () => "",
});

export function PageProvider({
  children,
  title,
  notebookName,
}: PageProviderProps) {
  const { bookmark } = useBookmark();
  const ref = useRef<RefDataHeading>({});

  const formatTextHref = (text: string) =>
    text.toLowerCase().trim().replace(" ", "_");

  function setHeading(text: string) {
    const href = formatTextHref(text);
    const heading = ref.current[href];
    ref.current[href] = {
      href,
      text,
      subHeadings: heading ? heading.subHeadings : {},
    };
  }

  function setSubHeading(text: string) {
    const href = formatTextHref(text);
    const index = Object.values(ref.current).length - 1;
    const heading = Object.values(ref.current)[index];
    if (!heading) return;
    ref.current[heading.href].subHeadings[href] = {
      text,
      href,
    };
  }

  function getHeadings() {
    let headings: any[] = Object.values(ref.current);
    headings = headings.map((heading) => ({
      ...heading,
      subHeadings: Object.values(heading.subHeadings),
    }));
    return headings;
  }

  function clear() {
    ref.current = {};
  }

  return (
    <PageContext.Provider
      value={{
        title,
        getHeadings,
        setHeading,
        bookName: bookmark.name,
        setSubHeading,
        notebookName,
        clear,
        formatTextHref,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export default PageContext;
