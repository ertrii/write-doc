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
  bookmark("Nueva prueba", "/new_test", [
    group("Bienvenido", {
      "/": {
        title: "Introducción 2",
        page: Main,
      },
      "/use": {
        title: "Uso 2",
        page: Use,
      },
    }),
  ]),
];

export default bookmarks;
