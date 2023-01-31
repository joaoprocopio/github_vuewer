import { HomePage, ErrorPage } from "~/pages"

const routes = [
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

export { routes }
