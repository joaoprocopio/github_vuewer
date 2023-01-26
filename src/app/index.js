import App from "./App.vue"

import { createApp } from "vue"

import { installPlugins } from "~/plugins"
import { mockServer } from "~/api"

if (process.env.NODE_ENV === "development") {
  mockServer()
}

const app = createApp(App)

installPlugins(app)

app.mount("#__vue")

export { app }
