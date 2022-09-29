import useBookmark from "../hooks/useBookmark";
import Menu from "./Menu";
import { ChangeEvent } from "react";

export interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const { bookmarkNames, setIndex, index } = useBookmark();

  function changeHandler(ev: ChangeEvent<HTMLSelectElement>) {
    setIndex(Number(ev.target.value));
  }

  return (
    <div id="layout">
      <nav id="sidebar">
        <div id="logo">
          <h2>Forest Project</h2>
        </div>
        <div className="selector">
          <select
            defaultValue={index.toString()}
            name="proyect"
            id="select"
            onChange={changeHandler}
          >
            {bookmarkNames.map((name, i) => (
              <option key={i} value={i.toString()}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <Menu />
      </nav>
      {children}
    </div>
  );
}
