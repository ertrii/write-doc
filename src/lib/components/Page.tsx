import usePage from "../hooks/usePage";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

export interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  const { title } = usePage();

  return (
    <Sidebar>
      <div id="breadcrumb">
        <span>Bookmark</span> / <span>Title</span> / <span>{title}</span>
      </div>
      <div className="content">
        <article>
          <h1 className="title">{title}</h1>
          {children}
        </article>
        <aside>
          <p>Current Page</p>
          <ul>
            <li className="active">Explication</li>
            <li>Import</li>
            <li>Usage</li>
          </ul>
        </aside>
      </div>
      <Navigation />
    </Sidebar>
  );
}
