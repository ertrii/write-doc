import { useContext } from "react";
import PageContext from "../contexts/page-context";

export default function usePage() {
  return useContext(PageContext);
}
