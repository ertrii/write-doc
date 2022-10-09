/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useLayoutEffect } from "react";
import usePage from "../hooks/usePage";

export interface HeadingProps {
  children?: ReactNode;
  type?: "heading-1" | "heading-2" | "heading-3" | "heading-4";
}

export function Heading({ children, type = "heading-1" }: HeadingProps) {
  const { setHeading, setSubHeading, title, formatTextHref } = usePage();

  const headingTitle = (children || title).toString();

  useLayoutEffect(() => {
    if (type === "heading-2") {
      setHeading(headingTitle);
    }
    if (type === "heading-3") {
      setSubHeading(headingTitle);
    }
  }, []);

  if (type === "heading-1") {
    return <h1 className="heading">{headingTitle}</h1>;
  }

  if (type === "heading-2") {
    return (
      <h2 id={formatTextHref(headingTitle)} className="heading">
        {children}
      </h2>
    );
  }

  if (type === "heading-3") {
    return (
      <h3 id={formatTextHref(headingTitle)} className="heading">
        {children}
      </h3>
    );
  }

  return <h4 className="heading">{children}</h4>;
}
