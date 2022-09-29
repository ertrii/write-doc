import { useContext } from "react";
import BookmarkContext from "../contexts/bookmark-context";

export default function useBookmark() {
  return useContext(BookmarkContext);
}
