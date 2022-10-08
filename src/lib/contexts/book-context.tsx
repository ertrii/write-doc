import {
  createContext,
  MutableRefObject,
  ReactNode,
  useRef,
  useState,
} from "react";

export interface BookContextInterface {
  booksRef: MutableRefObject<any>;
  setBookIndex: (index: number) => void;
  bookIndex: number;
}

export interface BookProviderProps {
  children: ReactNode;
}

export const BookContext = createContext<BookContextInterface>({
  booksRef: null as any,
  setBookIndex: () => null,
  bookIndex: 0,
});

export function BookProvider({ children }: BookProviderProps) {
  const booksRef = useRef({});
  const [bookIndex, setBookIndex] = useState(0);

  return (
    <BookContext.Provider value={{ booksRef, bookIndex, setBookIndex }}>
      {children}
    </BookContext.Provider>
  );
}
