import { Bookmark, bookmark, group } from "../lib";
import Main from "./main";
import Use from "./main/Use";

const bookmarks: Bookmark[] = [
  bookmark("Inicio", "/welcome", [
    group("Bienvenido", {
      "/": {
        title: "Introducción",
        page: Main,
      },
      "/use": {
        title: "Uso",
        page: Use,
      },
    }),
  ]),
];

export default bookmarks;
