/* eslint-disable react-hooks/exhaustive-deps */
import usePage from "../hooks/usePage";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import { render, useRender } from "redity";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface PageProps {
  children: React.ReactNode;
}

function Aside() {
  const { hash } = useLocation();
  useRender("PAGE_ASIDE");
  const { getHeadings, clear } = usePage();

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  return (
    <aside>
      <div className="content">
        <p>Current Page</p>
        <ul>
          {getHeadings().map((heading, i) => (
            <li key={i} className={hash === `#${heading.href}` ? "active" : ""}>
              <a href={"#" + heading.href}>{heading.text}</a>
              {heading.subHeadings.length > 0 ? (
                <ul>
                  {heading.subHeadings.map((subHeading, j) => (
                    <li
                      key={j}
                      className={hash === `#${subHeading.href}` ? "active" : ""}
                    >
                      <a href={"#" + subHeading.href}>{subHeading.text}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default function Page({ children }: PageProps) {
  const { title, bookName, notebookName, getHeadings } = usePage();

  useEffect(() => {
    render("PAGE_ASIDE");
  }, [getHeadings().length]);

  return (
    <Sidebar>
      <div id="breadcrumb">
        <span>{bookName}</span> / <span>{notebookName}</span> /{" "}
        <span>{title}</span>
      </div>
      <div className="content">
        <article>
          {children}
          <Navigation />
        </article>
        <Aside />
      </div>
    </Sidebar>
  );
}
