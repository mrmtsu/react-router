import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    chidlren: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
