import App from "./App.vue"

import { createApp } from "vue"

import { env } from "@/configs"
import { installPlugins } from "~/plugins"
import { mockServer } from "~/mocks"

if (env.isDev && env.isMock) {
  mockServer()
}

export const app = createApp(App)

installPlugins(app)

app.mount("#__vue")
