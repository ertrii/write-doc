import { Routes, Route } from "react-router-dom";
import Page404 from "./Page404";
import getUrl from "../utilities/getUrl";
import useBookmark from "../hooks/useBookmark";
import { PageProvider } from "../contexts/page-context";
import Welcome from "./Welcome";

export default function Router() {
  const { bookmarks } = useBookmark();

  return (
    <Routes>
      {bookmarks.map((bookmark) =>
        bookmark.groups.map((group) =>
          Object.entries(group.routes).map(([path, value]) => (
            <Route
              key={getUrl(bookmark.path, path)}
              path={getUrl(bookmark.path, path)}
              element={
                <PageProvider notebookName={group.name} title={value.title}>
                  <value.page />
                </PageProvider>
              }
            />
          ))
        )
      )}
      <Route path="/" element={<Welcome />} />
      <Route
        path="*"
        element={
          <PageProvider notebookName="" title="404">
            <Page404 />
          </PageProvider>
        }
      />
    </Routes>
  );
}
