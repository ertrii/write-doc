import { createContext, ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bookmark } from "../types/bookmark";

export interface BookmarkProviderProps {
  children: ReactNode;
  bookmarks: Bookmark[];
}

export interface BookmarkContextInterface {
  bookmark: Bookmark;
  setIndex: (index: number) => void;
  index: number;
  bookmarkNames: string[];
  bookmarks: Bookmark[];
}

const BookmarkContext = createContext<BookmarkContextInterface>({
  bookmark: null as any,
  setIndex: () => null,
  index: 0,
  bookmarkNames: [],
  bookmarks: [],
});

export function BookmarkProvider({
  children,
  bookmarks,
}: BookmarkProviderProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [index, setIndex] = useState(() => {
    const i = bookmarks.findIndex(
      (bm) => bm.path.replace(/\//, "") === (pathname.split("/")[1] || "")
    );
    return i >= bookmarks.length || i < 0 ? 0 : i;
  });
  const bookmark = bookmarks[index];
  const bookmarkNames = bookmarks.map((_bookmark) => _bookmark.name);

  function _setIndex(i: number) {
    setIndex(i);
    navigate(bookmarks[i].path);
  }

  return (
    <BookmarkContext.Provider
      value={{
        bookmark,
        setIndex: _setIndex,
        index,
        bookmarkNames,
        bookmarks,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkContext;
