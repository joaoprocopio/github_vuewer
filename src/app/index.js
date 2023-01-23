import App from "./App.vue"

import { createApp } from "vue"

import { installPlugins } from "~/plugins"

const app = createApp(App)

installPlugins(app)

app.mount("#app")

export { app }
