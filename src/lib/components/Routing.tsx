import { ReactNode, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { BookContext } from "../contexts/book-context";
import { PageProvider } from "../contexts/page-context";

export interface NotebooksProps {
  name: string;
  path: string;
  children: ReactNode;
}

export interface BooksProps {
  children: ReactNode;
}

export interface NoteProps {
  Component: (...props: any) => JSX.Element;
  path: string;
  title: string;
}

export function Notebooks({ children, name, path }: NotebooksProps) {
  const { booksRef } = useContext(BookContext);

  booksRef.current[name] = {
    name,
    path,
    notes: {},
  };

  return <Routes>{children}</Routes>;
}

export function Note({ path, Component, title }: NoteProps) {
  return (
    <Route
      path={path}
      element={
        <PageProvider notebookName="" title={title}>
          <Component />
        </PageProvider>
      }
    />
  );
}
