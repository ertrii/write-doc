import { Link } from "react-router-dom";
import useBookmark from "../hooks/useBookmark";

export default function Welcome() {
  const { bookmarks } = useBookmark();

  return (
    <div id="welcome">
      <div>
        <h1 className="title">Docs APP</h1>
        <ul className="bookmarks">
          {bookmarks.map((bookmark, i) => (
            <li key={i}>
              <Link to={bookmark.path}>{bookmark.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
