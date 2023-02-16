import { routerPlugin } from "~/router"
import { vuetifyPlugin } from "./vuetify-plugin"
import { piniaPlugin } from "./pinia-plugin"
import { layoutPlugin } from "./layout-plugin"

export const installPlugins = (app) => {
  app.use(vuetifyPlugin).use(piniaPlugin).use(routerPlugin).use(layoutPlugin)
}
