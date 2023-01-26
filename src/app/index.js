import App from "./App.vue"

import { createApp } from "vue"

import { env } from "@/configs"
import { installPlugins } from "~/plugins"
import { mockServer } from "~/api"

if (env.isDev && env.isMock) {
  mockServer()
}

const app = createApp(App)

installPlugins(app)

app.mount("#__vue")

export { app }
