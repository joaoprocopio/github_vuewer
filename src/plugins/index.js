import { vuetifyPlugin } from "./vuetify-plugin"
import { piniaPlugin } from "./pinia-plugin"

export const installPlugins = (app) => {
  app.use(vuetifyPlugin).use(piniaPlugin)
}
