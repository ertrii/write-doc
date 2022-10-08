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
          <Navigation />
        </article>
        <aside>
          <p>Current Page</p>
          <ul>
            <li className="active">Title</li>
            <li>Title 2</li>
            <li>Title 3</li>
          </ul>
        </aside>
      </div>
    </Sidebar>
  );
}
