import { BrowserRouter } from "react-router-dom";
import "../css/normalize.css";
import "../css/base.css";
import "../css/welcome.css";
import "../css/layout.css";
import "../css/navigation.css";

import "../css/text.css";
import Router from "./Router";
import { BookmarkProvider } from "../contexts/bookmark-context";
import { Bookmark } from "../types/bookmark";

export interface WriteDocProps {
  bookmarks: Bookmark[];
}

export function WriteDoc({ bookmarks }: WriteDocProps) {
  return (
    <BrowserRouter>
      <BookmarkProvider bookmarks={bookmarks}>
        <Router />
      </BookmarkProvider>
    </BrowserRouter>
  );
}
