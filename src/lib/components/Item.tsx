import { Link, useLocation } from "react-router-dom";
import comparePath from "../utilities/comparePath";

export interface ItemProps {
  path: string;
  children: React.ReactNode;
}

export default function Item({ path, children }: ItemProps) {
  const { pathname } = useLocation();

  return (
    <li className={comparePath(path, pathname) ? "active" : ""}>
      <Link to={path}>{children}</Link>
    </li>
  );
}
