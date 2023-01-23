import { vuetifyPlugin } from "./vuetify"
import { piniaPlugin } from "./pinia"

const installPlugins = (app) => {
  app.use(vuetifyPlugin)
  app.use(piniaPlugin)
}

export { installPlugins }
