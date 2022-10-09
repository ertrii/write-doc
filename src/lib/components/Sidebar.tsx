import Menu from "./Menu";

export interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <div id="layout">
      <nav id="sidebar">
        <div id="logo">
          <h2>Writedoc</h2>
        </div>
        <div className="content-search">
          <div className="icon" />
          <input className="search" placeholder="Búsqueda" />
        </div>
        <Menu />
      </nav>
      <section id="section">{children}</section>
    </div>
  );
}
