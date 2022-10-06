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
          <h2>Writedoc</h2>
        </div>
        <Menu />
      </nav>
      {children}
    </div>
  );
}
