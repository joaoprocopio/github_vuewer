import { vuetifyPlugin } from "./vuetify"

const installPlugins = (app) => {
  app.use(vuetifyPlugin)
}

export { installPlugins }
