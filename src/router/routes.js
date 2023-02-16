import { HomePage, ErrorPage } from "~/pages"

export const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home-page",
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
    name: "error-page",
  },
]
