import { Link, useLocation } from "react-router-dom";
import useBookmark from "../hooks/useBookmark";
import { PageMetadata } from "../types/metadata-page";
import getUrl from "../utilities/getUrl";

export default function Navigation() {
  const { pathname } = useLocation();
  const { bookmark } = useBookmark();

  const pathSplitted = pathname.split("/");
  pathSplitted.shift();
  pathSplitted.shift();
  const nextPath = pathSplitted.join("/");
  const group = bookmark.groups.find((g) => g.routes[`/${nextPath}`]);
  const groupIndex = bookmark.groups.findIndex((g) => g.routes[`/${nextPath}`]);

  if (!group) {
    return <></>;
  }

  const index = Object.keys(group.routes).findIndex(
    (path) => path === `/${nextPath}`
  );

  let prev: [string, PageMetadata] | undefined = Object.entries(group.routes)[
    index - 1
  ];
  let next: [string, PageMetadata] | undefined = Object.entries(group.routes)[
    index + 1
  ];
  const prevGroup = bookmark.groups[groupIndex - 1];
  const nextGroup = bookmark.groups[groupIndex + 1];

  if (!prev && prevGroup) {
    const length = Object.values(prevGroup.routes).length;
    prev =
      length > 0 ? Object.entries(prevGroup.routes)[length - 1] : undefined;
  }

  if (!next && nextGroup) {
    const length = Object.values(nextGroup.routes).length;
    next = length > 0 ? Object.entries(nextGroup.routes)[0] : undefined;
  }

  return (
    <div className="navigation">
      {prev ? (
        <div>
          <span>{`< `}</span>
          <Link to={getUrl(bookmark.path, prev[0])}>{prev[1].title}</Link>
        </div>
      ) : (
        ""
      )}
      {prev && next ? <div></div> : ""}
      {next ? (
        <div>
          <Link to={getUrl(bookmark.path, next[0])}>{next[1].title}</Link>
          <span>{` >`}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
