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
      <h1 className="title">{title}</h1>
      {children}
      <Navigation />
    </Sidebar>
  );
}
