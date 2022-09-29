import { BrowserRouter } from "react-router-dom";
import "../css/normalize.css";
import "../css/base.css";
import "../css/welcome.css";
import "../css/layout.css";
import Router from "./Router";
import { BookmarkProvider } from "../contexts/bookmark-context";
import { Bookmark } from "../types/bookmark";

interface AppProps {
  bookmarks: Bookmark[];
}

function App({ bookmarks }: AppProps) {
  return (
    <BrowserRouter>
      <BookmarkProvider bookmarks={bookmarks}>
        <Router />
      </BookmarkProvider>
    </BrowserRouter>
  );
}

export default App;
